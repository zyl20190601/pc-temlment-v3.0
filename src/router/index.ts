import { createRouter, createWebHashHistory, RouteLocationNormalized } from 'vue-router'

import routes from './base'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition) {
    // return desired position
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        left: 0
      }
    }
  }
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
  next()
})

// router.afterEach((to, from) => {
//   console.log();
// });


export default router
