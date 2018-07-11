<template>

  <header class="main_header">

    <!--<a class="main_header_txt width70" href="index.html">Save the Rhino</a>--
    <!-- <h1 class="main_header_txt width70">Save the Rhino</h1> -->

    <nav class="navbar fixed-top navbar-expand ">

      <div class="flex-row main_header_txt width70" :class="{height30:setHeightTall}">
        <!--Router link used to tell Vue JS to route to new page-->

        <!-- brand logo link page top[ left-->
        <router-link
          tag="div"
          class="navbar-brand pull-left flex-row"
          to="/instructorHomepage"
          v-if="!isNavBarOpen && whatRole === 'Admin'"
        ><img class="logoIMg" src="../../../assets/L-Plate.png" alt="logo">
          <h1 class="logo-txt">aidBack</h1>
        </router-link>
        <router-link

          tag="div"
          class="navbar-brand pull-left flex-row"
          to="/"
          v-if="!isNavBarOpen && whatRole !== 'Admin'"
        ><img class="logoIMg" src="../../../assets/L-Plate.png" alt="logo">
          <h1 class="logo-txt">aidBack</h1>
        </router-link>


        <!--<div class="collapse navbar-collapse " :class="{ show: isNavBarOpen}">-->
        <ul style="padding: 5px">
          <!-- contact link button-->
          <li class="nav-item">
            <router-link
              class="nav-link"
              tag="a"
              to="/about-us"
            >
              About
            </router-link>
          </li>
          <!-- contact link button-->
          <li class="nav-item">
            <router-link
              class="nav-link"
              tag="a"
              to="/contact"
            >
              Contact
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
          <li class="nav-item">
            <router-link
              class="nav-link"
              tag="a"
              to="/blog"
            >
              Blog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              tag="a"
              to="/register"
              v-if="!auth"
            >
              Register
            </router-link>
          </li>
          <li>
            <router-link
              v-if="whatRole === 'Admin'"
              class="nav-link"
              tag="a"
              to="/instructorHomepage"
            >
              Admin Page
            </router-link>
          </li>
          <li>
            <router-link
              v-if="whatRole === 'Registered'"
              class="btn-base btn-cancel"
              tag="a"
              :to="'/pupil/'+ storeUserID"
            >
              My Profile
            </router-link>
          </li>
        </ul>
        <!--</div>-->
      </div>
      <div class="top-navBar-responsive" :class="{height30:setHeightTall}" @click="setHeightTall = !setHeightTall">
        <h1>Menu</h1>
      </div>
      <div class="btn_nextSection width30 column" :class="{height30:setHeightTall}" @click="showLoginForm" v-if="!isLoginBoxShown && !auth" >
        <h1>Login</h1>
      </div>
      <div class="btn_nextSection width30 column" :class="{height30:setHeightTall}" @click="showLoginForm" v-if="isLoginBoxShown && !auth" >
        <h1>Close</h1>
      </div>
      <div class="btn_nextSection width30 column" :class="{height30:setHeightTall}" @click="onLogout" v-if="auth">
        <h1>Logout</h1>
      </div>


    </nav>
    <div class="loginComponent"  v-if="isLoginBoxShown && !auth">
      <loginComponent v-if="!auth"></loginComponent>
    </div>
    <!--<div class="top-navBar">-->
    <!--<h1 class="title">Login</h1>-->
    <!--<loginComponent v-if="!auth"></loginComponent>-->


    <!--<button class="btn-base btn-submit" @click="onLogout" v-if="auth">Logout</button>-->


    <!--<router-link-->
    <!--v-if="whatRole === 'Admin'"-->
    <!--class="btn-base btn-cancel"-->
    <!--tag="button"-->
    <!--to="/instructorHomepage"-->
    <!--&gt;-->
    <!--Admin Page-->
    <!--</router-link>-->
    <!--<router-link-->
    <!--v-if="whatRole === 'Registered'"-->
    <!--class="btn-base btn-cancel"-->
    <!--tag="button"-->
    <!--:to="'/pupil/'+ storeUserID"-->
    <!--&gt;-->
    <!--My Profile-->
    <!--</router-link>-->
    <!--</div>-->


  </header>

</template>

<script>

  import loginComponent from '../../accounts/Login.vue';

  export default {
    components: {
      loginComponent
    },

    data() {
      return {
        isNavBarOpen: false,
        isLoginBoxShown: false,
setHeightTall: false
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
      showLoginForm(){
        this.isLoginBoxShown = !this.isLoginBoxShown
      },
      onLogout() {
        this.$store.dispatch('logout');
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .logoIMg {
    height: 50px;
  }
.logo-txt{
  font-size: 30px;
  padding-top: 12px;
  color: #FFFFff;
}

  .logo-txt:hover{
    color: #D0021B;
    cursor: pointer;
  }

  .logoIMg:hover{
   transform: rotate(-5deg);
    cursor: pointer;
  }

  .navbar {
    /*box-shadow: 0 5px 15px grey;*/
  }

  .top-navBar {
    margin-top: 20vh;
    width: 40%;
    height: 20vh;
    /*background: #4B4E49 ;*/
    z-index: 1000;
  }

  .width70 {
    overflow: hidden;
  }
.height30{
height: 50vh;
  transition: 0.2s all linear;
}
  .navbar {
    padding: 0;
  }

</style>
