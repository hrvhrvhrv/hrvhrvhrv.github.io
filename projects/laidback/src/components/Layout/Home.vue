<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Welcome to Laidback Driving School</h1>
      <p>Home of Glasgows most laidback driving school</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">
        <img src="../../assets/Clydeside1.jpg" alt="">
      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Learn with us</h3>
        </header>
        <div class="images40_mainText_container">
          <h3 class="title">Sign up with Laidback driving school</h3>
          <p class="output">We are Glasgows most relaxed driving school </p>
          <h3 class="title">Lessons</h3>
          <h3 class="output">Book lessons online via the website or over the phone</h3>
          <h3 class="title">Deals</h3>
          <h3 class="output">We run block booking and student discounts</h3>
        </div>
        <footer class="fullWidth flex-row">
          <router-link
            tag="div"
            class="btn_nextSection width70"
            to="/register"
          >
            <h2>Register</h2>
          </router-link>

        </footer>

      </div>

    </main>
  </div>
</template>

<script>
  export default {
    computed: {
      // funds() {
      //     return this.$store.getters.funds;
      // }
    }
  }
</script>

<style>

  .img-splash {
    width: 350px;
    height: 350px;
  }

  .splash {
    background: aliceblue;
    padding: 30px;
    border-radius: 25px;
  }

  .logoIMg {
    height: 90px;
  }

  .pageSecLight {
    background: aliceblue;
    height: 80vh;
  }

  .pageSecDark {
    background: black;
    color: aliceblue;
    height: 20vh;
  }
</style>
