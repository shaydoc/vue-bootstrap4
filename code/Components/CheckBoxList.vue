<template>
<div>
  <div class="form-check form-check-inline">
  <label class="form-check-label" v-for="(option,index) in options" v-bind:key="index">
    <input class="form-check-input" type="checkbox"
     :checked="isChecked(option.value)" 
     v-bind:name="name" v-bind:id="`${name}${index}`"
     v-bind:value="option.value" 
      @change="updateValue($event.target.value,$event.target.checked)"> {{option.text}}
  </label>
</div>
</div>
</template>

<script>
export default {
   name:'check-box-list',
   props:['options','name','value' ],
   methods:{
     updateValue(item,checked){
          var arr = this.value.slice(0)
          
          var itemNotInList = 
               this.value.find(x=>x === item) == undefined 
               
          if (checked && itemNotInList){
            arr.push(item)
          }
          else if (!checked){
            arr = arr.filter(x=>x !== item)
          } 

          this.$emit('input', arr)
      },
      isChecked(item){
        console.log(item)
        return this.value.find(x=>x === item) !== undefined 
      }
   }
}
</script>

<style>

</style>
