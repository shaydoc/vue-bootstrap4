<template>
  <div class="card mb-4" v-bind:class="colorClass">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['color'],
  computed:{
      colorClass(){
        if (this.color == undefined){
           return {'card-default':true }
        }
        else if (this.color == 'primary'){
            return {'card-primary':true }
        }
        else if (this.color == 'success'){
            return {'card-success':true }
        }
        else if (this.color == 'warning'){
            return {'card-warning':true }
        }
        else if (this.color == 'error'){
           return {'card-error':true }
        }
      }
  }
}
</script>
 
 
