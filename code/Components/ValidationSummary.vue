<template>
  <div class="error-summary" v-if="this.errors && this.errors.length > 0">
            <div class="error-heading">
                Please review and correct the following errors:
            </div>
            <div class="error-body">
                <ul>
                    <li v-for="(item,index) in this.errors" v-bind:key="index">{{ item.message }}</li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
   name:'validation-summary',
   props:['errors']
}
</script>

<style scoped>
  .error-summary {
    border-bottom-color: #c71c22;
    border-left-color: #c71c22;
    border-right-color: #c71c22;
    border-top-color: #c71c22;
    background-color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0 0 0 0;
    border-image-repeat: stretch stretch;
    border-image-slice: 100% 100% 100% 100%;
    border-image-source: none;
    border-image-width: 1 1 1 1;
    border-left-style: solid;
    border-left-width: 1px;
    border-right-style: solid;
    border-right-width: 1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top-style: solid;
    border-top-width: 1px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    margin-bottom: 27px;
}

.error-heading {
    background-color: #c71c22;
    color: #fff;
    border-bottom-color: #ddd;
    border-left-color: #ddd;
    border-right-color: #ddd;
    border-top-color: #ddd;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    padding-bottom: 9px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 9px;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    color: #fff;
}

.error-body {
    display: table;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
}

    .error-body > ul {
        margin-bottom: 0;
    }

</style>
