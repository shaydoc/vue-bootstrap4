<template>
   <textarea class="form-control"
          v-bind:value="value"
          v-on:input="updateValue($event.target.value)" ></textarea>
</template>

<script>
export default {
  name:'text-area',
  props:['value'],
  methods:{
      updateValue(item){
          this.$emit('input', item)
      }
  }

}
</script>

<style>

</style>
