<template>

  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <!--Router link used to tell Vue JS to route to new page-->

    <!-- brand logo link page top[ left-->
    <router-link
      class="navbar-brand pull-left"
      to="/instructorHomepage"
      v-if="!isNavBarOpen"
    ><img class="logoIMg" src="../../../assets/L-Plate.png" alt="logo">
      aidBack
    </router-link>


    <div class="collapse navbar-collapse " :class="{ show: isNavBarOpen}" >
      <ul class="navbar-nav mr-auto">

        <!-- contact link button-->
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            to="/blog"
          >
            Blog
          </router-link>
        </li>
        <!-- contact link button-->
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            to="/allLessons"
          >
            Lessons
          </router-link>
        </li>
        <!-- contact link button-->
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            to="/pupil/all"
          >
            Pupils
          </router-link>
        </li>
        <!-- prices link button-->
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            to="/price"
          >
            Prices
          </router-link>
        </li>
        <!-- Link to blog-->

      </ul>

      <router-link
        class="btn btn-success my-2 my-sm-0"
        tag="button"
        to="/blog/">
        Blog
      </router-link>

      <router-link
        class="btn btn-success my-2 my-sm-0"
        tag="button"
        to="/pupil/all">
        All Pupil
      </router-link>

      <router-link

        class="btn btn-success my-2 my-sm-0"
        tag="button"
        to="/allLessons"
      >
        All Lesson
      </router-link>

      <button class="btn btn-danger" @click="onLogout" >Logout</button>


    </div>
    <!-- brand logo for when responsive menu is active -->
    <a class="navbar-brand pull-left" href="#" v-if="isNavBarOpen">LaidBack</a>

    <!-- toggle button for  responsive menu bar-->
    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation" @click="isNavBarOpen = !isNavBarOpen">
      <span class="navbar-toggler-icon"></span>
    </button>


  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isNavBarOpen: false,
        isDropDownOpen: false

      }
    },
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },

    methods: {
      clicktest() {
        console.log(role)
      },
      onLogout() {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  .logoIMg{
    height: 40px;
  }
  .navbar{
    /*box-shadow: 0 5px 15px grey;*/
  }
</style>
