<template>
   <card-block>
       <h4 class="card-title"><slot></slot></h4>
   </card-block>  
</template>
<script>
import CardBlock from './CardBlock.vue'
export default {
  name: 'card-title',
  components:{CardBlock}
}
</script>

<style>

</style>
