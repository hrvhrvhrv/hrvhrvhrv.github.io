<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Contact Laidback</h1>
      <p>We would love to hear from you at Laidback driving school</p>
      <p>Contact us through our registration form, email or give us a call</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">
        <img src="../../assets/access-adult-blur-261628.jpg" alt="">

      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Contact</h3>
        </header>
        <div class="images40_mainText_container row">

          <div class="contact-item">
            <i class="fas fa-phone fa-5x"></i>
            <h1 class="title">Call us</h1>
            <p class="">0141 2123456</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope fa-5x"></i>
            <h1 class="title">email us</h1>
            <p class="">info@laidback.com</p>
          </div>
        </div>
        <footer class="fullWidth flex-row">

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
    margin: 30px 0;
  }

  .contact-item i{
    color: #D0021B;
  }
</style>


