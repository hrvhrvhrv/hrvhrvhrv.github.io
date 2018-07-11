<template>
  <div>

    <div class="page-wrapper col-md-8 offset-md-2">


      <div class="customer">
        <div class="profile-section">
          <div class='profile-pic'>
            <img src="../../assets/logo.png" alt="">
          </div>
          <div style="padding: 30px 0 0 30px">
            <h2>{{Pupil.contact.firstName}} {{Pupil.contact.lastName}}</h2>
            <p>{{Pupil.registration.location}}</p>
            <p>{{Pupil.contact.phoneNumber}}</p>
            <p>{{Pupil.email}}</p>
          </div>
        </div>
        <div class="drivingInfo-section col justify-space-around">
          <!--<h1>{{Pupil.contact.firstName}} {{Pupil.contact.lastName}}</h1>-->
          <h1>Registered Pupil</h1>
          <hr>

          <div class="">

            <!--<div class="row justify-space-between">-->
              <!--<h2>Provisional Licence</h2>-->
              <!--<div v-if="provisional"><i class="fas fa-check fa-2x"></i></div>-->
              <!--<div v-if="!provisional"><i class="fas fa-ban fa-2x"></i></div>-->

            <!--</div>-->
            <!--<div class="row justify-space-between">-->
              <!--<h2>Theory Test</h2>-->
              <!--<div v-if="theoryTest"><i class="fas fa-check fa-2x"></i></div>-->
              <!--<div v-if="!theoryTest"><i class="fas fa-ban fa-2x"></i></div>-->

            <!--</div>-->
            <!--<div class="row justify-space-between">-->
              <!--<h2>Previous Lessons</h2>-->
              <!--<h1>{{previousLessons}}</h1>-->

            <!--</div>-->
            <!--<div class="col justify-space-between">-->


              <!--<h2>Availability</h2>-->
              <!--<div class="row">-->
                <!--<h1 class="availabilityDays" v-for="days in availablilty">{{days}}</h1>-->
              <!--</div>-->

            <!--</div>-->

            <!--<div class="flex-row">-->
              <!--<div class="btn-base btn-submit">-->
                <!--Accept as Pupil-->
              <!--</div>-->

              <!--<div class="btn-base btn-clear">-->
                <!--Reject as pupil-->
              <!--</div>-->
            <!--</div>-->


            <div v-for="lessonData in lessons" class="Lesson-list-item flex-row no-wrap">
              <div class="imageWrapper">
                <div class="profileImage">
                  <h3>{{lessonData.lessonSLot}}</h3>
                  <p>{{lessonData.lessonDate }}</p>
                </div>
              </div>
              <div class="text-container flex-column">
                <h5 class="pupil-text ">{{Pupil.contact.firstName}}</h5>
                <p>{{Pupil.registration.location}}</p>
              </div>
              <div class="flex-row button-container">
                <router-link
                  tag="div"
                  :to="'/lesson/edit/' + lessonData._id"
                  class="btn-base button1"
                >
                  <i class="fas fa-graduation-cap"></i>
                  edit
                </router-link>

                <router-link
                  tag="div"
                  :to="'/lesson/' + lessonData._id"
                  class="btn-base button2"
                >
                  <i class="fas fa-graduation-cap"></i>
                  View
                </router-link>
                <!--<div class="btn-base button1"><i class="far fa-edit"></i>Edit</div>-->
                <!--<div class="btn-base button2"><i class="fas fa-graduation-cap"></i>View</div>-->
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
    <!--<div class="panel-footer">-->
    <!--<router-link-->
    <!--tag="button"-->
    <!--class="btn btn-primary"-->
    <!--:to="'/pupil/edit/' + $route.params.id"-->
    <!--&gt;-->
    <!--Edit-->
    <!--</router-link>-->
    <!--<button class="btn btn-primary" @click="deletePost">Delete</button>-->
    <!--</div>-->
  </div>


</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        pupilID: this.$route.params.id,
        Pupil: [],
        errors: []
      }
    },
    methods: {
      deletePost() {
        const url = '/pupil/' + this.pupilID;
        axios.delete(url)
          .then(
            this.$router.push('/')
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
      pupilName() {

      },
      lessons() {
        return this.Pupil.lessons
      },
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
        .catch(error => console.log(error));

    },
  }
</script>

<style scoped>
  .availabilityDays{
    padding: 15px 10px;
  }

</style>
