<template>
 <main-wrapper>
     <page-title>Card List</page-title>
    <p>
      This accounts for responsiveness across multiple devices,  expects a 
    </p>
   
   <card-list :list="list"></card-list>
     <pre>
      list: [{id:0, title:'', desc:'', link:''},{id:0, title:'', desc:'', link:''}...]
      &lt;card-list :list="list"&gt;&lt;/card-list&gt;
    </pre>
    <hr>
    <section-title>Individual Cards</section-title>
   
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

    <pre>
     
       &lt;row&gt;
       &lt;column :size="colSize" v-for="item in list" v-bind:key="item.id"&gt;
         &lt;card color="default"&gt;
             &lt;card-title&gt; &#123;item.title &#125;  &lt;/card-title&gt;
             &lt;card-block&gt;
                &lt;p&gt; &#123; item.desc &#125; &lt;/p&gt;
             &lt;/card-block&gt;
             &lt;card-block&gt;
                &lt;add-button&gt;&lt;/add-button&gt;
                &lt;cancel-button&gt;&lt;/cancel-button&gt;
             &lt;/card-block&gt;
         &lt;/card&gt;
       &lt;/column&gt;
    &lt;/row&gt;
    

    </pre>

 </main-wrapper>
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
