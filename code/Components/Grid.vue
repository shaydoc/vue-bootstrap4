<template>
  <div v-bind:class="containerClass">
      <slot></slot>
  </div>
</template>

<script>
export default {
   name:'grid',
   props:['type'],
   computed:{
       containerClass() {
           if (this.type === undefined || this.type === 'fixed' ){
               return { container:true }
           }
           else if (this.type === 'fluid') {
               return { 'container-fluid':true }
           }
       }
   }
}
</script>

<style>

</style>
