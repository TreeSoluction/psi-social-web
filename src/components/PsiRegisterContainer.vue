<script setup lang="ts">
import { ref } from 'vue'
import '../output.css'
import { register } from '../service/user'
import Notification from './Notification.vue'
import { useRouter } from 'vue-router'
import { psiRegister } from '@/service/psi'

const router = useRouter()

const notificationRef = ref(null)

const showSuccess = () => {
  notificationRef.value.addNotification('Cadastro realizado!', 'success')
}

const showError = () => {
  notificationRef.value.addNotification('Algo deu errado!', 'error')
}

const formData = ref({
  crp: '',
  cnpj: '',
  image: '',
})

const errors = ref({
  crp: '',
  cnpj: '',
  image: '',
})

const base64Image = ref<string | null>(null)

const handleImageUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    base64Image.value = await resizeImage(file, 500)
    formData.value.image = base64Image.value
  }
}

const resizeImage = (file: File, maxSize: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      const img = new Image()
      img.src = reader.result as string

      img.onload = () => {
        const canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height

        if (width > height && width > maxSize) {
          height = Math.round((height * maxSize) / width)
          width = maxSize
        } else if (height > maxSize) {
          width = Math.round((width * maxSize) / height)
          height = maxSize
        }

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0, width, height)

        // Convert canvas to Base64
        resolve(canvas.toDataURL('image/jpeg'))
      }

      img.onerror = (error) => reject(error)
    }

    reader.onerror = (error) => reject(error)
  })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  errors.value = { crp: '', cnpj: '', image: '' }

  if (!formData.value.crp) {
    errors.value.crp = 'O campo de crp é obrigatório'
  }

  if (!Object.values(errors.value).some((error) => error !== '')) {
    try {
      await psiRegister(formData)
      showSuccess()
      router.replace('/')
    } catch (err) {
      showError()
    }
  }
}
</script>

<template>
  <Notification ref="notificationRef" />

  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-1"
  >
    <div
      class="flex justify-center text-center p-6 sm:shadow-2xl sm:border-2 bg-white border-blue-500 md:max-w-96 rounded-md"
    >
      <div>
        <RouterLink to="/" class="block"
          ><img src="../assets/icons/close.svg" width="20"
        /></RouterLink>
        <div class="flex flex-col">
          <h1 class="text-3xl text-blue-600 font-bold drop-shadow-lg">
            Obrigado por fazer parte da nossa equipe :-)
          </h1>
          <h2 class="text-1xl">Precisamos de alguns dados</h2>
        </div>
        <form
          class="flex flex-col text-start gap-3 mt-5"
          @submit="handleSubmit"
        >
          <div>
            <label>CRP (somente números)</label>
            <input
              v-model.trim="crp"
              v-model="formData.crp"
              type="crp"
              cnpj="crp"
              id="crp"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 shadow-md"
              placeholder="exemplo@gmail.com"
            />
            <p v-if="errors.crp" class="text-red-500 text-sm mt-1">
              {{ errors.crp }}
            </p>
          </div>
          <div>
            <label>CNPJ (opcional)</label>
            <input
              type="text"
              v-model="formData.cnpj"
              name="cnpj"
              id="cnpj"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 shadow-md"
              placeholder="Fulano de tal"
            />
            <p v-if="errors.cnpj" class="text-red-500 text-sm mt-1">
              {{ errors.cnpj }}
            </p>
          </div>
          <div>
            <label>Imagem de Perfil</label>
            <input
              id="profileImage"
              type="file"
              class="w-full"
              accept="image/*"
              @change="handleImageUpload"
            />
            <div v-if="base64Image" class="flex justify-center">
              <img
                :src="base64Image"
                alt="Image Preview"
                class="preview-image w-48 h-48"
              />
            </div>
          </div>
          <button
            class="p-2 bg-blue-500 rounded-lg mt-4 shadow-xl"
            type="submit"
          >
            Entrar para o time
          </button>
          <div class="flex text-gray-500 italic">
            Não compartilhamos seus dados com terceiros.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
