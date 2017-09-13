<template>
   <input type="text"
          class="form-control"
          v-bind:value="value"
          v-on:input="updateValue($event.target.value)" />
</template>

<script>
export default {
  name:'text-box',
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
