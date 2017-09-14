<template>
    <column class="d-none d-md-block d-xl-block" :size="size">
       <slot></slot>
    </column>
</template>

<script>
export default {
   name:'desktop-column',
   props:['size']
}
</script>

<style>

</style>
