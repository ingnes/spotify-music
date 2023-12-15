import { createWebHistory, createRouter } from 'vue-router'

import Search from '@/components/views/SmSearch.vue'
import Error from '@/components/views/SmError.vue'
import About from '@/components/views/SmAbout.vue'
import Track from '@/components/views/SmTrackDetail.vue'

const history = createWebHistory()

export default createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/track/:id',
      name: 'track',
      component: Track,
    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: Error,
    },
  ],
})
