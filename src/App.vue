<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div id="nav">
  <RouterLink to="/">Inicio</RouterLink>
  <RouterLink to="/brazil">Brazil</RouterLink>
  <RouterLink to="/jamaica">Jamaica</RouterLink>
  <RouterLink to="/panama">Panama</RouterLink>
  <RouterLink to="/hawaii">Hawaii</RouterLink>
  <RouterLink to="/about">Acerca de</RouterLink>
</div>
  <div class="container">
    <router-view />
  </div>
</template>