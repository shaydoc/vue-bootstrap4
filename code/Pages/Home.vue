<template>
<div>
  
  <jumbotron>
    <grid type="fixed">
         <h1 class="display-3">Vue-Bootstrap</h1>
        <p>Making some vue components with radiate...</p>
        <p><a class="btn btn-primary btn-lg" href="/#/index/form" role="button">Learn more »</a></p>
    </grid>
  </jumbotron>
   <grid type="fixed">
     <row>
         <column :size="4">
           <card>
               <card-title>What is Vue-Bootstrap?</card-title>
               <card-block>
                   <p>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                   </p>
               </card-block>
           </card>
         </column>
         <column :size="4">
           <card>
               <card-title>Why do we use it?</card-title>
                <card-block>
                   <p>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                   </p>
               </card-block>
           </card>
         </column>
          <column :size="4">
           <card>
               <card-title>How will it help us?</card-title>
                <card-block>
                   <p>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                   </p>
               </card-block>
           </card>
         </column>                 
     </row>
   </grid>
</div>
</template>

<script>

export default {
  name: 'examples' 
}
</script>
 
 