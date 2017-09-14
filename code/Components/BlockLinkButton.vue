<template>
   <button type="button" class="btn btn-block" @click="navigate" >
     <slot></slot>
   </button>  
</template>

<script>
export default {
   props:['to'],
   name:'block-link-button',
   methods:{
       navigate(){
           console.log('navigating')
           this.$emit('navigate')
       }
   }
}
</script>

<style>

</style>
