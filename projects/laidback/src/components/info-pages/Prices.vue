<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Price of lessons</h1>
      <p>Take a look at our fee prices</p>
      <p>We offer deals for buying lessons in a block</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">
        <img src="../../assets/stoater-411258-unsplash.jpg" alt="">

      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Prices</h3>
        </header>
        <div class="images40_mainText_container">

          <p>All lessons are paid with cash or bank transfer prior to lesson begining</p>
          <div class="row">
            <div class="contact-item">
              <i class="fas fa-money-bill-alt fa-4x"></i>
              <p class="title">£25 per lesson</p>
            </div>
            <div class="contact-item">
              <i class="fas fa-cart-plus fa-4x"></i>
              <p class="title">10 lessons for £220</p>
            </div>
          </div>

        </div>
        <footer class="fullWidth flex-row">
          <!--<div-->
          <!--@click="lastForm"-->
          <!--class="btn_nextSection width30 backBtn"-->

          <!--&gt;-->
          <!--<h2>Back</h2>-->
          <!--</div>-->
          <router-link
            tag="div"
            class="btn_nextSection width70"
            to="/register"
          >
            <h2>Book Lessons</h2>
          </router-link>


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
    computed: {},


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
  .contact-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center ;
    width: 50%;
    height: 150px;
    margin: 60px 0;
  }
</style>


