<template>
  <select class="form-control" @change="updateValue($event.target.value)" >
    <option value="" selected>----- Please Select ------</option>
    <option v-for="option in options" :value="option.value" v-bind:key="option.value">
      {{option.text}}
    </option>
  </select>
</template>

<script>
export default {
 name:'drop-down-list',
 props:['options','selectedValue'],
 methods:{
   updateValue(item){
     this.$emit('input', item)
   }
 }
}
</script>

<style>

</style>
