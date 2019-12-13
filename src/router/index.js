import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Error404 = () => import('page/Error404');

const options = {
  routes: [
    {
      path: '*',
      component: Error404
    }
  ]
};

const router = new VueRouter(options);
router.beforeEach((to, from, next) => {
  // console.log('to: ' + to.path + ' from: ' + from.path)
  // const { app } = router
  // if (app.$store) app.$store.dispatch('showLoading')
  next();
});
router.afterEach((/* to, from, next */) => {
  const { app } = router;
  // console.log('the router::', router)
  app.$nextTick(() => app.$store.dispatch('hideLoading'));
});

export default router;
