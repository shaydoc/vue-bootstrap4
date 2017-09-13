<template>
<div>
  <app-header>
  </app-header>
  <jumbotron>
    <grid type="fixed">
         <h1 class="display-3">Vue-Bootstrap 4</h1>
        <p>Making some vue components with bootstrap 4...</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
    </grid>
  </jumbotron>
  <grid type="fixed">
    <row>
      <column size="12">
         <card color="default">
             <card-title>Form Example</card-title>
             <card-block>
                <example-form></example-form>
             </card-block>
         
         </card>
      </column>
    </row>
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
     <row>
       <column :size="colSize" v-for="item in list" v-bind:key="item.id">
         <card color="default">
             <card-title>{{item.title}}</card-title>
             <card-block>
                <p>{{ item.desc }}</p>
             </card-block>
              <card-block>
                <update-button></update-button>
                <cancel-button></cancel-button>
             </card-block>
         </card>
       </column>
    </row>
     <row>
       <column :size="colSize" v-for="item in list" v-bind:key="item.id">
         <card color="default">
             <card-title>{{item.title}}</card-title>
             <card-block>
                <p>{{ item.desc }}</p>
             </card-block>
               <card-block>
                <delete-button></delete-button>
                <cancel-button></cancel-button>
             </card-block>
         </card>
       </column>
    </row>
    <row>
      <column :size="12">
           <pagination-footer></pagination-footer>
      </column>
    </row>
    <page-footer></page-footer>
  </grid>
</div>
</template>

<script>
import ExampleForm from './ExampleForm'

export default {
  name: 'examples',
  components:{ ExampleForm },
  data () {
    return {
      colSize:3,
      errors:[{message:'This is an error!'}],
      list: [{id:1, title:'Card Title', desc:'Card Body'},
             {id:2, title:'Card Title', desc:'Card Body'},
             {id:3, title:'Card Title', desc:'Card Body'},
             {id:4, title:'Card Title', desc:'Card Body'}]
    }
  }
}
</script>



 