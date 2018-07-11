<template>
  <div>

    <div class="page-wrapper col-md-8 offset-md-2">
      <div class="blog-headline">
        <h1>This is a blank Component<hr>
        </h1>
      </div>
      <div class="col-md-9 ">
        <p>The route has been made but an blank component has been passed into the route</p>
      </div>

      <button class="btn btn-primary" @click="onLogout">Logout</button>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    computed: {
      email() {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      },
      auth() {
        return this.$store.getters.isAuthenticated
      }
    },
    created() {
      this.$store.dispatch('fetchUser')
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  }


</script>

<style scoped>

</style>
