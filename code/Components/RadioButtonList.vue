<template>
<div>
  <div class="form-check form-check-inline">
  <label class="form-check-label" v-for="(option,index) in options" v-bind:key="index">
    <input class="form-check-input" type="radio" :checked="value === option.value" v-bind:name="name" v-bind:id="`${name}${index}`" v-bind:value="option.value" @change="updateValue($event.target.value)"> {{option.text}}
  </label>
</div>
</div>
</template>

<script>
export default {
   name:'radio-button-list',
   props:['options','name','value' ],
   methods:{
     updateValue(item){
          this.$emit('input', item)
      }
   }
}
</script>

<style>

</style>
