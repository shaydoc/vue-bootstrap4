<template>
  <grid type="fluid">
      <row>
        <column :size="3">
           <side-nav>
            <router-link class="list-group-item" tag="li" to="/index/form">Form</router-link>
            <router-link class="list-group-item" tag="li" to="/index/cards">Cards</router-link>
            <router-link class="list-group-item" tag="li" to="/index/wizard">Wizard</router-link>
            <router-link class="list-group-item" tag="li" to="/index/pagelist">Page List</router-link>
           
           </side-nav>
        </column>
       <column :size="9">
           <router-view></router-view>
       </column>
      </row>
  </grid>
</template>

<script>
export default {

}
</script>

<style>
 
</style>
