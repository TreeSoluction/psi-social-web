<script setup>
import "../output.css";
import LoginButton from "./LoginButton.vue";
import HeaderButton from "./RouterButton.vue";
</script>

<template>  
  <div class="hidden md:flex justify-between items-center gap-9 pl-10 pr-10 shadow-sm hover:shadow-md transition  duration-200">
    <div class="">
        <div class="flex w-full text-blue-800 font-funnel text-4xl drop-shadow-2xl">
            Seja bem vindo ao PSI-Social    
        </div>
    </div>
    <div class="flex justify-center items-center mt-5 mb-5 gap-5">
        <HeaderButton title="Profissionais" route="user/register"/>
        <HeaderButton title="Serviços"  route="user/register"/>
        <HeaderButton title="Sobre"  route="user/register"/>
    </div>  
    <div>
        <LoginButton/>
    </div>
  </div>
</template>
