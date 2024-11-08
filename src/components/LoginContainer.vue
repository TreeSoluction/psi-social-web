<script setup>
import { ref } from "vue";
import "../output.css";
const count = ref(0);
</script>

<template>
  <div class="flex font-lexend">
    <div class="flex text-center justify-center p-6">
      <div>
        <h1 class="text-3xl font-bold">Vamos dar o primeiro passo?</h1>
        <h2 class="text-1xl">Precisamos de alguns dados</h2>
        <div class="flex flex-col text-start gap-3">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="price"
              id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              placeholder="exemplo@gmail.com"
            />
          </div>
          <div>
            <label>Nome Completo</label>
            <input
              type="email"
              name="price"
              id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              placeholder="Fulano de tal"
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              name="price"
              id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
          <button class="p-2 bg-blue-500 rounded-lg">Criar minha conta</button>
          <div class="text-center">
            Se voce ja tem uma conta
            <a class="text-blue-800">
                clique aqui
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
