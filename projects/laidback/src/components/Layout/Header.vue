<template>

    <headerNonRegistered></headerNonRegistered>

</template>

<script>
  import headerNonRegistered from './headers/Header-non-registered.vue';
  import headerPupil from './headers/Header-Pupil.vue';
  import headerInstructor from './headers/Header-Instructor.vue';

  export default {
    components: {
      headerNonRegistered,
      headerPupil,
      headerInstructor
    },
    data() {
      return {
        isNavBarOpen: false,
        isDropDownOpen: false,
        role: ''

      }
    },
    computed: {
      auth() {
        return this.$store.getters.isAuthenticated
      },
      whatRole() {
        return this.$store.getters.userRole
      },
      storeUserID() {
        return this.$store.getters.userIdStore
      }

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
  .logoIMg {
    height: 75px;
  }

</style>
