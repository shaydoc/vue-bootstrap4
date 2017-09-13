<template>
  <nav class="mt-4 mb-4" aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
 .page-item.active .page-link {
    z-index: 2;
    color: #fff;
    background-color: #0a7ad0;
    border-color: #0867b0;
}
</style>
