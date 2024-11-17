<script setup lang="ts">
import { getUserData } from '@/service/user'
import '../output.css'
import LoginButton from './LoginButton.vue'
import HeaderButton from './RouterButton.vue'
import { ref } from 'vue'
import type { IUserData } from '@/interfaces/IUserData'
import PsiRegisterButton from './PsiRegisterButton.vue'
import { verifyHavePsi } from '@/service/psi'
import PsiUpdateButton from './PsiUpdateButton.vue'

const logged = ref(false)
const havePsi = ref(false)
const name = ref('')

const loadUserData = async () => {
  const userData = (await getUserData()) as IUserData
  if (userData === undefined) {
    logged.value = false
  } else {
    logged.value = true
    name.value = userData.name
  }
}
const verifyPsi = async () => {
  const response = await verifyHavePsi()
  if (response) {
    havePsi.value = true
  }
}
loadUserData()
verifyPsi()
</script>

<template>
  <div
    class="hidden md:flex justify-between items-center gap-9 pl-10 pr-10 shadow-sm hover:shadow-md transition duration-200"
  >
    <div class="flex">
      <div
        class="flex w-full text-blue-800 font-funnel text-4xl drop-shadow-2xl"
      >
        Seja bem vindo ao PSI-Social
      </div>
    </div>
    <div class="flex justify-center items-center mt-5 mb-5 gap-5">
      <HeaderButton title="Profissionais" route="user/register" />
      <HeaderButton title="Serviços" route="user/register" />
      <HeaderButton title="Sobre" route="user/register" />
    </div>
    <div class="flex justify-center items-center gap-7">
      <div class="font-lexend text-blue-900">
        Bem vindo de volta {{ name }}!
      </div>
      <PsiRegisterButton v-if="!havePsi" />
      <div v-if="logged">
        <!-- <PsiUpdateButton v-if="havePsi" /> -->
      </div>
      <div v-if="!logged"><LoginButton /></div>
      <button
        class="flex font-funnel t text-2xl drop-shadow-2xl hover:font-bold hover:underline text-center text-blue-700 transition duration-500"
        v-else
      >
        <div class="flex font-funnel text-blue-700">Meu Perfil</div>
      </button>
    </div>
  </div>
</template>
