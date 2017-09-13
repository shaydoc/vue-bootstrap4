<template>
      <examples id="app"></examples>
</template>

<script>
import Examples from '../Pages/Examples.vue'

export default {
  name: 'app',
  components: {
    Examples
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css");
@import "https://fonts.googleapis.com/css?family=Lato:400,700,900";
@import "https://fonts.googleapis.com/css?family=Roboto+Slab";

body{
    font-family: Lato,"Open Sans",sans-serif;
}

</style>
