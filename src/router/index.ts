import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import TasksView from '@/views/TasksView.vue'
import FriendsView from '@/views/FriendsView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView,
    },
    {
      path: '/tasks',
      component: TasksView,
      children: [
        {
          path: '',
          redirect: '/tasks/main',
        },
        {
          path: 'main',
          name: 'Main tasks',
          component: () => import('@/views/tasks/TasksMainView.vue'),
        },
        {
          path: 'partner',
          name: 'Partner tasks',
          component: () => import('@/views/tasks/TasksPartnerView.vue'),
        },
      ],
    },
    {
      path: '/friends',
      name: 'Friends',
      component: FriendsView,
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: LeaderboardView,
    },
  ],
})

export default router
