// 1. Importamos los paquetes del Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Imporntado componentes para las rutas
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Brazil from '@/views/BrazilView.vue'
import Jamaica from '@/views/JamaicaView.vue'
import Hawaii from '@/views/HawaiiView.vue'
import Panama from '@/views/PanamaView.vue'
const router = createRouter({
    // 2.1 Configurando modo historia
    history: createWebHistory(),
    // 2.2 Alta y configuración de rutas
    routes: [{
      path: "/",
      name: "Home",
      component: Home
    },{
      path: "/about",
      name: "About",
      component: About
    },{
      path: "/brazil",
      name: "Brazil",
      component: Brazil
    },{
      path: "/jamaica",
      name: "Jamaica",
      component: Jamaica
    },{
      path: "/panama",
      name: "Panama",
      component: Panama
    },{
      path: "/hawaii",
      name: "Hawaii",
      component: Hawaii
    }]
  });
  
  export default router;