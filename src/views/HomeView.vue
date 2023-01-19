<script>
import sourceData from '@/data.json'
console.log();
export default{
  data(){
    return{
      destinations: sourceData.destinations
    }
  }
}
</script>
<template>
    <div>
      <h1>Todos los destinos</h1>
      <div class="destinations"></div>
      <RouterLink 
      v-for="destination in destinations" 
      :key="destination.id"
      :to="destination.slug">
      <h2>{{ destination.name }}</h2>
      <img :src="`images/${destination.image}`" :alt="destination.name">
    </RouterLink>
    </div>
  </template>