import http from 'axios';
import config from '@/config/config';

export default api => {
  console.log(api);
  const method = api.method === 'post' ? 'post' : 'get';
  return (params, options = {}) => {
    const { path, payload } = options;
    if (method === 'get') {
      payload._t = '';
    }
    let url = path ? api.url + path : api.url;
    url = config.domain + url;
    return (
      http
        .request({
          withCredentials: config.withCredentials,
          url,
          method,
          ...payload,
          [method === 'get' ? 'params' : 'data']: params
        })
        .then(({ data }) => {
          // 成功
          if (data.code === 0) {
            return data;
          }
          // 重新登录
          if (data.code === 2) {
            window.sessionStorage.setItem('userInfo', '{}');
            const { origin, pathname } = window.location;
            window.top.location.href = `${origin + pathname}?t=${Date.now()}`;
          }
          return Promise.reject(data);
        })
        // eslint-disable-next-line consistent-return
        .catch(res => {
          if (http.isCancel(res)) {
            console.log('Resquest canceled', res.message);
          } else {
            if (res && res.code !== 0) {
              console.error(`code:${res.code}, message: ${res.message}`);
            }
            return Promise.reject(res);
          }
        })
    );
  };
};
