<script setup>
  import { ref } from "vue";
  import { login } from "@/service/user";
  import "../output.css";
  import { useRouter } from "vue-router";
  import Notification from "./Notification.vue";

  const notificationRef = ref(null);

const showSuccess = () => {
  notificationRef.value.addNotification('Cadastro realizado!', 'success');
};

const showError = () => {
  notificationRef.value.addNotification('Algo deu errado!', 'error');
};
  const formData = ref({
    email: '',
    password: '',
  });

  const errors = ref({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    console.log("Vou submetido");
    
    event.preventDefault(); 
    errors.value = { email: '',  password: '',  };
    console.log(formData.value);
    
    if (!formData.value.email) {
      errors.value.email = 'O campo de email é obrigatório';
    } 

    if (!formData.value.password) {
      errors.value.password = 'O campo de senha é obrigatório';
    }

    if(!Object.values(errors.value).some(error => error !== "")) { 
      try { 
        console.log("feito");
        await login(formData);
        showSuccess();
        router.replace("/")
      } catch (err) { 
        showError();
      }
    }
  };

</script>

<template>
  <Notification ref="notificationRef" />

  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-1">
    <div class="flex flex-col justify-center text-center p-6 sm:shadow-2xl sm:border-2 bg-white border-blue-500 md:max-w-96 rounded-md">
        <div class="flex flex-col">
          <RouterLink to="/" class="block"><img src="../assets/icons/close.svg" width="20"></RouterLink>
          <h1 class="text-3xl text-blue-600 font-bold drop-shadow-lg ">Seja bem vindo de volta!</h1>
          <h2 class="text-1xl">Insira seus dados abaixo</h2>
        </div>
        <form class="flex flex-col text-start gap-3" @submit="handleSubmit">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              v-model="formData.email"
              id="email"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 shadow-md"
              placeholder="exemplo@gmail.com"
            />
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
          </div>
          <button class="p-2 bg-blue-500 rounded-lg mt-4 shadow-xl" type="submit">Entrar</button>
          <div class="text-center">
            Se voce ainda não tem uma conta
            <a class="text-blue-800">
                clique aqui
            </a>
          </div>
          <div class="flex text-gray-500 italic">Não compartilhamos seus dados com terceiros. O processo de cadastro é totalmente anônimo.</div>
        </form>
    </div>
  </div>
</template>
