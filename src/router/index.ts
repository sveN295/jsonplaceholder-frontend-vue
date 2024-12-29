import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'
import PostEditView from '../views/PostEditView.vue'
import UsersView from '../views/UsersView.vue'
import UserView from '../views/UserView.vue'
import AlbumView from '@/views/AlbumView.vue'
import AlbumsView from '@/views/AlbumsView.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: PostView,
      props: true
    },
    {
      path: '/posts/:id/edit',
      name: 'edit.post',
      component: PostEditView,
      props: true
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/:id',
      name: 'user',
      component: UserView,
      props: true
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsView
    },
    {
      path: '/albums/:id',
      name: 'album',
      component: AlbumView,
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      props: true
    }
  ]
})

export default router
