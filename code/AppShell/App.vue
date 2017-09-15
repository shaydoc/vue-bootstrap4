<template>
     <div>
         <app-header></app-header>
          <transition name="fade" mode="out-in">
             <router-view></router-view>
         </transition>
         <grid type="fluid">
           <page-footer></page-footer>
        </grid>
     </div>
</template>

<script>
//import Examples from '../Pages/Examples.vue'

export default {
  name: 'app' //,
  //components: {
  //  Examples
  //}
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css");
@import "https://fonts.googleapis.com/css?family=Lato:400,700,900";
@import "https://fonts.googleapis.com/css?family=Roboto+Slab";

body{
    font-family: Lato,"Open Sans",sans-serif;
     padding-top: 3.5rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
 
</style>
