<template>
<div>
   <input v-bind:id="inputId"
          v-bind:list="list" 
          type="text"
          class="form-control"
          v-bind:value="value"
          v-on:input="updateValue($event.target.value)" />

          <datalist v-bind:id="list">
            <option v-for="item in list" v-bind:value="item" v-bind:key="item"></option>
         </datalist>
</div>
</template>

<script>
export default {
  name:'input-list',
  props:['value','listType','list','inputId'],
  methods:{
      updateValue(item){
          this.$emit('input', item)
      }
  }

}
</script>

<style>

</style>
