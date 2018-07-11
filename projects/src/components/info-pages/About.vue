<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Find out About Laidback</h1>
      <p>Fill in the form below to apply to be a pupil with laidback driving school.</p>
      <p>We will review your application and respond to you in one day</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">

        <img src="../../assets/heather-emond-577240-unsplash.jpg" alt="">
      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">About Laidback</h3>
        </header>
        <div class="images40_mainText_container">
<h2 class="title">Who are we</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
          <h2 class="title">Our Philosophy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </div>
        <footer class="fullWidth flex-row">
          <div
            @click="lastForm"
            class="btn_nextSection width30 backBtn"

          >
            <h2>Back</h2>
          </div>
          <div
            class="btn_nextSection width70" @click="nextForm"
            v-if="formSection < 2"
          >
            <h2>Next Section</h2>
          </div>
          <div
            class="btn_nextSection width70" @click="submit"
            v-if="formSection > 1"
          >
            <h2>Submit application</h2>
          </div>
        </footer>
      </div>

    </main>
  </div>

</template>

<script>
  import axios from 'axios';
  import {required, email, numeric, minLength, sameAs} from 'vuelidate/lib/validators'

  export default {
    data: () => {
      return {
        formSection: 0
      }
    },
    computed: {

    },


    methods: {
      nextForm() {

        return this.formSection++
      },
      lastForm() {

        return this.formSection--
      },
    }

  }


</script>

<style>
  .formSection {
    padding: 30px 10%;
  }
</style>


