<template>
  <main-wrapper>
      <card>
          <card-block>
              <section-title>Summary</section-title>
              <slot></slot>
          </card-block>
      </card>
      
      
</main-wrapper>
</template>

<script>
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'
let Validator = SimpleVueValidation.Validator
Vue.use(SimpleVueValidation, {mode: 'conservative'})

export default {
  name:'example-wizard-step4',
  props:['value'],
   data(){
         return {
          
         }
     },
    validators:{
        
     }
}
</script>

<style>

</style>
