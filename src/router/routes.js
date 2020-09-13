
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'overview/', component: () => import('pages/Overview.vue') },
      { path: 'bought/', component: () => import('pages/Bought.vue') },
      { path: 'sold/', component: () => import('pages/Sold.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
