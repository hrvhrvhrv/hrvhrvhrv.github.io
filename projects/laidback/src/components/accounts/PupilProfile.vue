<template>


  <!--<div class="page-wrapper col-md-8 offset-md-2">-->
  <!--<div class="tab-layout-container">-->


  <!--</div>-->
  <!--</div>-->

  <div>

    <div class="splash_header">

      <h1 class="title" v-if="role === 'Applicant'">Application Request</h1>
      <p v-if="role === 'Applicant'">We will review your application and respond to you in one day</p>
      <h1 class="title" v-if="role === 'Registered'">Registered Pupil</h1>
      <p v-if="role === 'Registered'">Welcome back to Laidback driving school. Thanks for signing into your account</p>

    </div>
    <main class="flex-row">

      <div class="pageSection_60">



        <div v-if="role === 'Applicant'">
          <div class="row justify-space-between">
            <h2>Provisional Licence</h2>
            <div v-if="provisional"><i class="fas fa-check fa-2x"></i></div>
            <div v-if="!provisional"><i class="fas fa-ban fa-2x"></i></div>
          </div>
          <div class="row justify-space-between">
            <h2>Theory Test</h2>
            <div v-if="!theoryTest"><i class="fas fa-ban fa-2x"></i></div>
            <div v-if="theoryTest"><i class="fas fa-check fa-2x"></i></div>
          </div>
          <div class="row justify-space-between">
            <h2>Previous Lessons</h2>
            <h1>{{previousLessons}}</h1>
          </div>
          <div class="col justify-space-between">
            <h2>Availability</h2>
            <div class="row">
              <h1 class="availabilityDays" v-for="days in availablilty">{{days}}</h1>
            </div>
            <hr>
          </div>

          <div class="flex-row">
            <div class="btn-base btn-submit"
                 @click="registerPupil">
              Accept as Pupil
            </div>

            <div class="btn-base btn-clear"
                 @click="deletePupil">
              Reject as pupil
            </div>
          </div>

        </div>
        <div v-if="role === 'Registered'">
          <h2 class="title">Next lesson</h2>
          <hr>
          <div v-for="lessonData in orderBy(lessons, 'lessonDate')" class="Lesson-list-item flex-row">
            <div class="imageWrapper">
              <div class="profileImage">

                <p>{{lessonData.lessonDate | moment(" Do ")}}</p>
                <p>{{lessonData.lessonDate | moment(" MMMM ")}}</p>
              </div>
            </div>
            <div class="text-container flex-column">

              <!--<h5 class="pupil-text ">{{Pupil.firstName}}</h5>-->
              <p class="title">{{lessonData.pickUpLocation | capitalize}}</p>
              <h3 style="font-size: 1.5rem">{{lessonData.lessonSLot}}</h3>
            </div>


            <div class="flex-row button-container">
              <!--<router-link-->
                <!--tag="div"-->
                <!--:to="'/lesson/edit/' + lessonData._id"-->
                <!--class="btn-base button1"-->
              <!--&gt;-->
                <!--<i class="fas fa-graduation-cap"></i>-->
                <!--edit-->
              <!--</router-link>-->

              <router-link
                tag="div"
                :to="'/lesson/' + lessonData._id"
                class="btn-base button2"
              >
                <i class="fas fa-graduation-cap"></i>
                View
              </router-link>
              <!--<div class="btn-base button1"><i class="far fa-edit"></i>Edit</div>-->
            </div>
          </div>
          <h2 class="title">Previous lesson</h2>
          <hr>
          <!--<router-link-->
          <!--tag="div"-->
          <!--:to="'/lesson/new/'+ Pupil._id"-->
          <!--class="btn-base button2"-->
          <!--&gt;-->
          <!--<i class="fas fa-graduation-cap"></i>-->
          <!--New Lesson-->
          <!--</router-link>-->

        </div>


      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large" v-if="role === 'Applicant'">Applicant Pupil</h3>
          <h3 class="title_large" v-if="role === 'Registered'">Registered Pupil</h3>
        </header>
        <div class="images40_mainText_container">

          <!--<div class='profile-pic'>-->
          <!--<img src="../../assets/logo.png" alt="">-->
          <!--</div>-->
          <transition name="fade" mode="out-in">
            <addNewLesson
              v-if="showNewLesson"
            ></addNewLesson>
          </transition>

          <div style="padding: 30px 0 0 30px" v-if="showProfile">
            <h2 class="title">{{Pupil.firstName}} {{Pupil.lastName}}</h2>

            <p>Tel: {{Pupil.phoneNumber}}</p>
            <p>email: {{Pupil.email}}</p>
            <hr>
            <p class="little-title">{{Pupil.location}}</p>
            <hr>
            <p>Total Number of Lessons <br> {{numberOfLessons}}</p>
            <p>Remaining Block Booking <br> {{ blockBookings }} / 10</p>

          </div>
          <div style="padding: 30px 0 0 30px" v-if="showProfileEdit">

            <p>Show edit profile</p>


          </div>

          <transition name="fade" mode="in-out">

            <editTheForm
              v-if="showEdit"
              v-bind:Pupil="Pupil"
            ></editTheForm>
          </transition>


        </div>
        <footer class="fullWidth flex-row">
          <div
            class="btn_nextSection width30 backBtn"
            v-if="role === 'Applicant'"
            @click="deletePupil"
          >
            <h2>Reject</h2>
          </div>
          <div
            class="btn_nextSection width70"
            v-if="role === 'Applicant'"
            @click="registerPupil"
          >
            <h2>Accept Pupil</h2>
          </div>

          <div
            @click="revealEditProfile"
            class="btn_nextSection width30 backBtn"
            v-if="role === 'Registered' && !showEdit"
          >
            <h2>Edit Profile</h2>
          </div>

          <div
            @click="revealProfile"
            class="btn_nextSection width30 backBtn"
            v-if="role === 'Registered' && showEdit"
          >
            <h2>Cancel</h2>
          </div>

          <div
            class="btn_nextSection width70" @click="revealNewLesson"
            v-if="role === 'Registered'"
          >
            <h2>New Lesson</h2>
          </div>




        </footer>
      </div>

    </main>
  </div>

</template>

<script>
  import axios from 'axios';
  import editForm from './PupilProfileEdit.vue';
  import newLesson from '../lesson/NewLesson.vue';

  export default {
    components: {
      editTheForm: editForm,
      addNewLesson: newLesson
    },
    data() {
      return {
        showEdit: false,
        showNewLesson: false,
        showProfile:true,
        pupilID: this.$route.params.id,
        Pupil: [],
        errors: []
      }
    },
    methods: {
      revealNewLesson(){
        this.showEdit = false;
        this.showProfile = false;
        this.showNewLesson = true;
      },
      // revealEditLesson(){
      //   this.showEdit = true;
      //   this.showProfile = false;
      //   this.showNewLesson = false;
      // },
      revealProfile(){
        this.showEdit = false;
        this.showProfile = true;
        this.showNewLesson = false;
      },
      revealEditProfile(){
        this.showEdit = true;
        this.showProfile = false;
        this.showNewLesson = false;
      },
      deletePupil() {
        const url = '/pupil/' + this.pupilID;
        axios.delete(url)
          .then(
            this.$router.push('/')
          )
          .catch(error => console.log(error))
      },
      registerPupil() {
        const url = '/pupil/registered/' + this.pupilID;
        axios.put(url)
          .then(
            this.$router.push('/instructorHomepage')
          )
          .catch(error => console.log(error))
      }

    },
    computed: {
      previousLessons() {
        return this.Pupil.registration.previousLessons
      },
      theoryTest() {
        return this.Pupil.registration.theoryTest
      },
      provisional() {
        return this.Pupil.registration.provisional
      },
      availablilty() {
        return this.Pupil.availability
      },
      role() {
        return this.Pupil.role
      },
      pupilName() {
        return this.Pupil.firstName + " " + this.Pupil.lastName
      },
      lessons() {
        return this.Pupil.lessons
      },
      location() {
        return this.Pupil.location
      },

      numberOfLessons() {
        return this.Pupil.lessons.length
      },
      blockBookings() {

        return 10 - this.numberOfLessons
      },
      nextLesson(){
        return this.Pupil.lessons[0]
      }
    }
    ,
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      const url = '/pupil/' + this.pupilID;
      axios.get(url)
        .then(res => {

          console.log("This is the res");
          console.log(res);
          this.Pupil = res.data
        })
        .catch(error => console.log(error))
    },
  }
</script>

<style scoped>
  .availabilityDays {
    padding: 15px 10px;
  }

  .profileImage, .pupil-text {
    padding-top: 15px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .pageSection_60 {
    /*background: #fff;*/
    padding: 15px;
  }

  .little-title {
    font-size: 1.4rem;
    padding: 15px 0;
  }

  .profileImage {
    padding: 10px;
  }

  .backBtn {
    background: #4B4E49;
  }

  .button1, .button2{
    width: 100%;
  }
</style>
