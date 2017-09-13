<template>
 <div class="mt-4">
   <h1 class="mb-4">Cards</h1>
   <row>
       <column :size="colSize" v-for="item in list" v-bind:key="item.id">
         <card color="default">
             <card-title>{{item.title}}</card-title>
             <card-block>
                <p>{{ item.desc }}</p>
             </card-block>
             <card-block>
                <add-button></add-button>
                <cancel-button></cancel-button>
             </card-block>
         </card>
       </column>
    </row>
 </div>
</template>

<script>
export default {
   name:'example-cards',
   data () {
    return {
      colSize:3,
      list: [{id:1, title:'Card Title', desc:'Card Body'},
             {id:2, title:'Card Title', desc:'Card Body'},
             {id:3, title:'Card Title', desc:'Card Body'},
             {id:4, title:'Card Title', desc:'Card Body'}]
    }
  }
}
</script>

<style>

</style>
