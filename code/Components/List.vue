<template>
  <ul>
      <li v-for="item in this.listItems" v-bind:key="item.href">
         <a v-bind:href="item.href">{{ item.title }}</a>
      </li>
  </ul>
</template>

<script>
export default {
    name:'list',
    //Using type we can choose to render the list horizontally, vertically, as list groups, 
    //list is using a href link and a title/description innit
    props:['type','listItems']
}
</script>

<style>

</style>
