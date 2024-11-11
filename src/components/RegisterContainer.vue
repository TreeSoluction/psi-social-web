<script setup>
  import "../output.css";
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-1">
    <div class="flex justify-center text-center p-6 sm:shadow-2xl sm:border-2 bg-white border-blue-500 md:max-w-96 rounded-md">
      <div>
        <RouterLink to="/" class="block"><img src="../assets/icons/close.svg" width="20"></RouterLink>
        <div class="flex flex-col">
          <h1 class="text-3xl text-blue-600 font-bold drop-shadow-lg ">Seja bem vindo de volta!</h1>
          <h2 class="text-1xl">Insira seus dados abaixo</h2>
        </div>
        <div class="flex flex-col text-start gap-3">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="price"
              id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 shadow-md"
              placeholder="exemplo@gmail.com"
            />
          </div>
          <div>
            <label>Nome Completo</label>
            <input
              type="email"
              name="price"
              id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  shadow-md"
              placeholder="Fulano de tal"
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              name="price"
              id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  shadow-md"
            />
          </div>
          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              name="price"
              id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  shadow-md"
            />
          </div>
          <button class="p-2 bg-blue-500 rounded-lg mt-4 shadow-xl">Criar minha conta</button>
          <div class="text-center">
            Se voce ja tem uma conta
              <RouterLink class="text-blue-800" to="/user/login">
                clique aqui
              </RouterLink>
          </div>
          <div class="flex text-gray-500 italic">Não compartilhamos seus dados com terceiros. O processo de cadastro é totalmente anônimo.</div>
        </div>
      </div>
    </div>
  </div>
</template>
