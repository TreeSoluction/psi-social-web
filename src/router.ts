import { createMemoryHistory, createRouter } from 'vue-router'
import RegisterContainer from './components/RegisterContainer.vue'
import LoginContainer from './components/LoginContainer.vue'
import PsiRegisterButton from './components/PsiRegisterButton.vue'
import PsiRegisterContainer from './components/PsiRegisterContainer.vue'

const routes = [
  { path: '/user/register', component: RegisterContainer },
  { path: '/user/login', component: LoginContainer },
  { path: '/psi/register', component: PsiRegisterContainer },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
