import * as Router from 'vue-router';

export default Router.createRouter({
  history: Router.createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/pages/login/Login'),
    },
    {
      path: '/',
      component: () => import('@/pages/Dashboard'),
      children: [
        {
          path: '/home',
          component: () => import('@/pages/home/Home'),
        },
      ],
    },
  ],
});
