<template>
<div style="display:inline">
       <div class="btn" v-bind:class="{spinner:spin}" v-if="spin"></div>
       <button type="button" class="btn btn-primary" @click="save"  v-else>Add</button>
   </div>
</template>

<script>
export default {
   name:'add-button',
    data(){
      return {
          spin:false
      }
    },
    methods:{
        save(){
            this.spin = true
            this.$emit('add')
            setTimeout(()=>this.spin = false, 1000)
        }
    }
}
</script>

<style scoped>
   

   @keyframes spinner {
  to {transform: rotate(360deg);}
}
 
.spinner:before {
  content: '';
  margin-left:-8px;
  margin-top:-8px;
  box-sizing: border-box;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #e6edf5;
  border-top-color: #333;
  animation: spinner .6s linear infinite;
}
</style>
