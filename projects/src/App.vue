<template>
  <div>
    <app-header></app-header>
    <transition mode="out-in" name="slide-fade">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
  import Header from './components/Layout/Header.vue';

  export default {
    components: {
      appHeader: Header

    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      this.$store.dispatch('tryAutoLogin')
    }
  }
</script>

<style>



</style>
