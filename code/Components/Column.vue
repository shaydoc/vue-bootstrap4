<template>
    <div v-bind:class="columnWidth">
      <slot></slot>
    </div>
</template>
<script>
export default {
   name:'column',
   props:["size"],
   computed:{
     columnWidth(){
          var obj = {}
          obj[`col-md-${this.size}`] = true
         return obj
     }
   }  
}
</script>

<style>

</style>
