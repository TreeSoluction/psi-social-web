<script setup>
  import { ref } from "vue";
  import "../output.css";
  import {register} from "../service/user"
  import Notification from "./Notification.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const notificationRef = ref(null);

  const showSuccess = () => {
    notificationRef.value.addNotification('Cadastro realizado!', 'success');
  };

  const showError = () => {
    notificationRef.value.addNotification('Algo deu errado!', 'error');
  };

  const formData = ref({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const errors = ref({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    errors.value = { email: '', fullName: '', password: '', confirmPassword: '' };

    if (!formData.value.email) {
      errors.value.email = 'O campo de email é obrigatório';
    } 

    if (!formData.value.name) {
      errors.value.name = 'O campo de nome completo é obrigatório';
    }

    if (!formData.value.password) {
      errors.value.password = 'O campo de senha é obrigatório';
    } else if (formData.value.password.length < 8) {
      errors.value.password = 'A senha deve ter pelo menos 8 caracteres';
    }

    if (formData.value.confirmPassword !== formData.value.password) {
      errors.value.confirmPassword = 'As senhas não coincidem';
    }

    if(!Object.values(errors.value).some(error => error !== "")) { 
      try { 
        await register(formData);
        showSuccess();
        router.replace("/user/login")
      } catch (err) { 
        showError();
      }
    }
  };

  
</script>


<template>
  <Notification ref="notificationRef" />

  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-1">
    <div class="flex justify-center text-center p-6 sm:shadow-2xl sm:border-2 bg-white border-blue-500 md:max-w-96 rounded-md">
      <div>
        <RouterLink to="/" class="block"><img src="../assets/icons/close.svg" width="20"></RouterLink>
        <div class="flex flex-col">
          <h1 class="text-3xl text-blue-600 font-bold drop-shadow-lg ">Vamos dar o primeiro passo?</h1>
          <h2 class="text-1xl">Precisamos de alguns dados</h2>
        </div>
        <form class="flex flex-col text-start gap-3"  @submit="handleSubmit">
          <div>
            <label>Email</label>
            <input
              v-model.trim="email"
              v-model="formData.email"
              type="email"
              name="email"
              id="email"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 shadow-md"
              placeholder="exemplo@gmail.com"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
          <div>
            <label>Nome Completo</label>
            <input
              type="text"
              v-model="formData.name"
              name="name"
              id="name"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  shadow-md"
              placeholder="Fulano de tal"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>

          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              v-model="formData.password"
              name="password"
              id="password"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  shadow-md"
            />
            <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
          </div>
          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              v-model="formData.confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  shadow-md"
            />
            <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
          </div>
          <button class="p-2 bg-blue-500 rounded-lg mt-4 shadow-xl" type="submit">Criar minha conta</button>
          <div class="text-center">
            Se voce ja tem uma conta
              <RouterLink class="text-blue-800" to="/user/login">
                clique aqui
              </RouterLink>
          </div>
          <div class="flex text-gray-500 italic">Não compartilhamos seus dados com terceiros. O processo de cadastro é totalmente anônimo.</div>
        </form>
      </div>
    </div>
  </div>
</template>
