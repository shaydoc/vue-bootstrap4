<template>
  <row>
      <column class="col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="(item,index) in list" v-bind:key="index">
          <card>
              <card-title>
                 {{ item.title }}
              </card-title>
              <card-block>
                  {{ item.desc }}
              </card-block>
              <card-block>
                  <block-link-button class="btn-success" :to="'/'" >
                      {{ item.title }}
                  </block-link-button>
              </card-block>
          </card>
      </column>
  </row>
</template>

<script>
export default {
  name:'card-list',
  props:['list']
}
</script>

<style>

</style>
