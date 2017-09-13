<template>
  <div>
       <img v-if="isRequired == true" class="required" src="http://uxm.nidirect.gov.uk/images/required.png" alt="Required information">
       <slot name="label">Label Name</slot>
       <slot name="help"></slot>
       <span class="validation-error">
         <slot name="error"></slot>
       </span>
       <slot name="input"><Input></Input></slot>
  </div>
</template>

<script>
export default {
   name:'validation-wrapper',
   props:['isRequired']
}
</script>

<style>
.help-block {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #626262;
}



 .validation .validation-error {
      color: #c71c22;
      display: block;
      margin-bottom: 0;
      margin-top: 0;
      font-weight: 100;
  }
</style>
