import VueRouter from 'vue-router'
import Brand from './components/Brand'

const router = new VueRouter({
    mode: 'history',
    base: '/brand',
    routes: [
      {
        path: '/:brand',
        component: Brand,
      }
    ]
})

export default router