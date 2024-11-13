import { createMemoryHistory, createRouter } from 'vue-router'
import RegisterContainer from './components/RegisterContainer.vue'
import LoginContainer from './components/LoginContainer.vue'

const routes = [
  { path: '/user/register', component: RegisterContainer },
  { path: '/user/login', component: LoginContainer },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
