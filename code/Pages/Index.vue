<template>
  <grid type="fluid">
      <row>
        <desktop-column :size="3">
           <side-nav>
            <router-link class="list-group-item" tag="li" to="/index/form">Form</router-link>
            <router-link class="list-group-item" tag="li" to="/index/buttons">Buttons</router-link>
            <router-link class="list-group-item" tag="li" to="/index/cards">Cards</router-link>
            <router-link class="list-group-item" tag="li" to="/index/wizard">Wizard</router-link>
            <router-link class="list-group-item" tag="li" to="/index/pagelist">Page List</router-link>
           </side-nav>
        </desktop-column >
       <column :size="9">
           <transition name="fade" mode="out-in">
             <router-view></router-view>
           </transition>
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
