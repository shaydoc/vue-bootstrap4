<template>
  <button type="button" class="btn btn-default" @click="cancel"><slot>Cancel</slot></button>
</template>

<script>
export default {
  name:'cancel-button',
  methods:{
    cancel(){
      this.$emit('cancel')
    }
  }
}
</script>

<style>

</style>
