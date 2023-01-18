import { createApp } from "vue";
// 1. Importamos los paquetes del Vue Router
import router from '@/router'
// Importando el componente principal de la aplicación
// El componente principal es un SFC
// Single File Component
import App from "./App.vue";
createApp(App).use(router).mount("#app");