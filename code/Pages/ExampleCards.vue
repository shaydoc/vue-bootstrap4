<template>
 <div class="mt-4">
 
    <h1 class="mb-4">Card List</h1>
    <p>
      This accounts for responsiveness across multiple devices,  expects a list [{id:0, title:'', desc:'', link:''},{id:0, title:'', desc:'', link:''}]
    </p>
   <card-list :list="list"></card-list>
    <hr>
    <h1 class="mb-4">Individul Cards</h1>
     <p>
      You have to manage responsiveness yourself here.
    </p>
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
      colSize:4,
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
