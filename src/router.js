import { createWebHistory, createRouter } from 'vue-router'

import search from '@/components/views/SmSearch.vue'
import error from '@/components/views/SmError.vue'

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
