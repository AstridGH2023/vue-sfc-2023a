<script setup>
import { ref } from "vue";

import ReactiveInput from "./ReactiveInput.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    🏫 <a href="https://www.tlaxiaco.tecnm.mx/">Instituto Tecnológico de Tlaxiaco</a>
  </p>
  <ReactiveInput />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>