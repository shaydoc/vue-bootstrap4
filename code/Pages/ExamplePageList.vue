<template>
  <main-wrapper>
      <page-title>Page List</page-title>

      <client-side-paged-table :list="list" :footerColSpan="3" @pageCreated="setPage" >
        <tr slot="header">
          <th>Id</th>
          <th>Forename</th>
          <th>Surname</th>
          <th>Age</th>
        </tr>
        <tr slot="rows" v-for="item in page" v-bind:key="item.id">
           <td>
            {{ item.id }}
          </td>
          <td>
            {{ item.forename }}
          </td>
            <td>
             {{ item.surname }}
          </td>
            <td>
              {{ item.age }}
          </td>
        </tr>
      </client-side-paged-table>
  </main-wrapper>
</template>

<script>
export default {
  created(){
    for(var i=0; i<1000; i++)
    {
      this.list.push({id: i, forename:'Shay',surname:'Doherty', age:41})
    }
  },
  data(){
      return {
        list:[],
        page:[]
      }
  },
  methods:{
    setPage(page){
      this.page = page
    }
  }
}
</script>

<style>

</style>
