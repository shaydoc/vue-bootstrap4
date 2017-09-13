<template>
  <div class="form-group mb-2" v-bind:class="{ 'validation': hasErrorMessage }">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'form-group',
  props:['hasErrorMessage']
}
</script>

<style>
    .validation {
    border-left-color: #c71c22;
    border-left-style: solid;
    border-left-width: 2px;
    padding-bottom: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
}
</style>
