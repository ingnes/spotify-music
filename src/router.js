import { createWebHistory, createRouter } from 'vue-router'

import search from '@/components/SmSearch.vue'
import error from '@/views/SmError.vue'

const history = createWebHistory()

export default createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'search',
      component: search,
    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: error,
    },
  ],
})
