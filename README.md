# frontend-report-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


├── App.vue // 主页面
├── assets
│   ├── css
│   │   ├── base.scss // 基本样式
│   │   ├── index.scss // 样式输出文件
│   │   ├── reset.scss // reset
│   │   ├── theme // 皮肤库样式覆盖
│   │   └── variable.scss // css变量
│   ├── http // 请求相关
│   │   ├── index.js
│   │   └── url
│   └── image // 图片
│       └── error404.png
├── components // 组件
├── main.js // 入口文件
├── page  // 项目页面
│   └── Error404.vue
├── router // 路由
│   └── index.js
├── store // vuex
│   ├── actions.js
│   ├── getters.js
│   ├── index.js
│   ├── mutation-types.js
│   ├── mutations.js
│   └── state.js
└── utils // 公共方法
    └── util.js
