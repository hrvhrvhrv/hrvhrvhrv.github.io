<template>

  <div>

    <div class="splash_header">
      <h1 class="title">Register for an account with Laidback</h1>
      <p>Fill in the form below to apply to be a pupil with laidback driving school.</p>
      <p>We will review your application and respond to you in one day</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">

        <img src="../../assets/agriculture-animal-animal-photography-420233.jpg" alt="">
      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Registration Form</h3>
        </header>
        <div class="images40_mainText_container">
          <form class="formSection " v-on:submit.prevent>
            <transition name="fade" mode="out-in">
            <div v-if="formSection === 0">
              <!--firstName input container -->
              <div class="form-group" :class="{invalid: $v.firstName.$error}">
                <label for="input-register-first-name" class=" col-form-label">First Name</label>
                <input type="text"
                       id="input-register-first-name"
                       placeholder="Please enter your first name"
                       class="form-control"
                       v-model="firstName"
                       @blur="$v.firstName.$touch()"
                >
              </div>
              <!--lastName input container -->
              <div class="form-group" :class="{invalid: $v.lastName.$error}">
                <label for="input-register-last-name" class=" col-form-label">Last Name</label>
                <input type="text"
                       id="input-register-last-name"
                       placeholder="Please enter your last name"
                       class="form-control"
                       v-model="lastName"
                       @blur="$v.lastName.$touch()"
                >


              </div>
              <!--Email input container  -->

              <!--phoneNumber input container  -->

              <div class="form-group" :class="{invalid: $v.phoneNumber.$error}">
                <label for="input-register-phone-number" class=" col-form-label">Contact Phone Number</label>

                <input type="tel"
                       id="input-register-phone-number"
                       placeholder="Please enter your phone number"
                       class="form-control"
                       v-model="phoneNumber"
                       @blur="$v.phoneNumber.$touch()"
                >


                <p v-if="!$v.phoneNumber.numeric">Please provide a valid phone number</p>

              </div>
              <div class="form-group">
                <label class=" col-form-label">Home Address</label>

                  <input type="text" v-model="location" class="form-control"
                         placeholder="Enter your address">

              </div>

            </div>
            </transition>
            <!--password input container  -->
            <transition name="fade" mode="out-in">
            <div v-if="formSection === 1">
              <div class="form-group" :class="{invalid: $v.email.$error}">
                <label for="input-register-email" class=" col-form-label">Email</label>
                <input type="text"
                       id="input-register-email"
                       placeholder="Please enter your email"
                       class="form-control"
                       v-model="email"
                       @blur="$v.email.$touch()"
                >
                <p v-if="!$v.email.email">Please provide a valid email address.</p>
              </div>
              <div class="form-group" :class="{invalid: $v.password.$error}">
                <label for="input-register-password" class="col-form-label">Password</label>

                <input type="password"
                       id="input-register-password"
                       placeholder="Password"
                       class="form-control"
                       v-model="password"
                       @blur="$v.password.$touch()"
                >
                <p v-if="!$v.password.minLen">Password must be min of 6 characters long</p>

              </div>

              <!--password confirm input container  -->

              <div class="form-group" :class="{invalid: $v.passwordRepeat.$error}">
                <label for="input-register-password-confirm" class="col-form-label">Confirm Password</label>

                <input
                  type="password"
                  v-model="passwordRepeat" class="form-control" id="input-register-password-confirm"
                  placeholder="Confirm assword"
                  @blur="$v.passwordRepeat.$touch()"

                >

              </div>
            </div></transition>
              <transition name="fade" mode="out-in">
            <div v-if="formSection === 2 ">
              <div class="form-group ">

                <div class="col-sm-10">
                  <div class="form-check">
                    <input v-model="provisional" class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label" for="gridCheck1">
                      I have a provisional drivers licence
                    </label>
                  </div>
                  <div class="form-check">
                    <input v-model="theoryTest" class="form-check-input" type="checkbox" id="gridCheck2">
                    <label class="form-check-label" for="gridCheck2">
                      I have passed my theory test
                    </label>
                  </div>
                </div>

              </div>
              <div class="form-group">
                <label for="input-register-previous-lessons" class="col-form-label">How many previous lessons have you
                  had?</label>

                <input type="number"
                       id="input-register-previous-lessons"
                       class="form-control"
                       v-model="previousLessons"
                       placeholder="number of previous lessons">

              </div>
              <div id='form-group'>
                <label for="input-register-previous-lessons" class="col-form-label">What days are you available for
                  lessons?</label>
                <div>
                  <input type="checkbox" id="Mon" value="Mon" v-model="availability">
                  <label for="Mon">Mon</label>
                  <input type="checkbox" id="Tue" value="Tue" v-model="availability">
                  <label for="Tue">Tue</label>
                  <input type="checkbox" id="Wed" value="Wed" v-model="availability">
                  <label for="Wed">Wed</label>
                  <input type="checkbox" id="Thur" value="Thur" v-model="availability">
                  <label for="Thur">Thur</label>
                  <input type="checkbox" id="Fri" value="Fri" v-model="availability">
                  <label for="Fri">Fri</label>
                  <input type="checkbox" id="Sat" value="Sat" v-model="availability">
                  <label for="Sat">Sat</label>
                </div>
                <br>

              </div>

              <div class="form-group row">
                <!--<div class="col-sm-10">-->
                  <!--<button class="btn  btn-success" @click.prevent="submit">Submit</button>-->

                  <!--<button class="btn  btn-danger" @click="clear">Clear</button>-->


                <!--</div>-->
                <div v-if="errorMessages" class="invalid">
                  <h4 v-for="(value, key) in errors">{{ value.message }}</h4>

                </div>
              </div>
            </div>
              </transition>
          </form>

        </div>
        <footer class="fullWidth flex-row">
          <div
            @click="lastForm"
            class="btn_nextSection width30 backBtn"
v-if="formSection != 0"
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
        formSection: 0,
        errors: {},
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordRepeat: '',
        provisional: false,
        theoryTest: false,
        previousLessons: 0,
        location: '',
        availability: []
      }
    },
    computed: {
      errorMessages() {
        return true
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLen: minLength(6)
      },
      passwordRepeat: {
//        sameAs: sameAs('password')
        sameAs: sameAs(vm => {
          return vm.password
        })
      },
      firstName: {
        required
      },
      lastName: {
        required
      },
      phoneNumber: {
        required,
        numeric
      }
    },
    methods: {
      nextForm() {

        return this.formSection++
      },
      lastForm() {

        return this.formSection--
      },
      submit() {
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          provisional: this.provisional,
          theoryTest: this.theoryTest,
          previousLessons: this.previousLessons,
          availability: this.availability,
          location: this.location
        };
        console.log(formData);
        axios.post('/account/register', formData)
          .then(res => {
            if (res.data.message) {
              this.errors = res.data.message;
            }
            console.log(res);
            // this allows for redirecting to another page once code has been executed
            this.$router.push('/')
          }).catch(error => console.log(
          console.log(error.response.data.error),
          this.errors = error.response.data.error.errors
        ))
      },
      clear() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.password = "";
        this.provisional = false;
        this.availability = [];
      }
    }

  }


</script>

<style>
  .formSection {
    padding: 30px 10%;
  }
</style>


