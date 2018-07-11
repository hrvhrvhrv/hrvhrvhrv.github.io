<template>

  <div>

    <div class="splash_header">
      <h1 class="title">{{todayDate | moment(" Do MMMM YYYY") }}</h1>


    </div>
    <main class="flex-row">
<!--the display tab-->
      <div class="pageSection_60">

        <div class="">
          <newPupils v-if="showNewPupils"></newPupils>

          <allPupils v-if="showAllPupils"></allPupils>
          <allLessons v-if="showAllLessons"></allLessons>
        </div>
      </div>
      <!-- the buttons -->
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Admin Page</h3>
        </header>
        <div class="images40_mainText_container">
          <h2 class="title">Pupils</h2>
          <div class="flex-row justify-space-around">
            <div
              class="btn-base button3"
              @click="setViewNewPupil">
              <i class="fas fa-user fa-3x"></i>
              <h3>
                New Pupils</h3>
            </div>
            <div
              class="btn-base button3"
              @click="setViewAllPupil">
              <i class="fas fa-user fa-3x"></i>
              <h3>
                All Pupils</h3>
            </div>





          </div>
          <h2 class="title">Lessons</h2>
          <div class="flex-row justify-space-around">
            <div
              class="btn-base button3"
              @click="setViewAllLessons">
              <i class="fas fa-graduation-cap fa-3x"></i>
              <h3>
                All Lessons</h3>
            </div>
            <div
              class="btn-base button3"
              @click="setViewAllLessons">
              <i class="fas fa-graduation-cap fa-3x"></i>
              <h3>
                This Week Lessons</h3>
            </div>
            <div
              class="btn-base button3"
              @click="setViewAllLessons">
              <i class="fas fa-graduation-cap fa-3x"></i>
              <h3>
                This Month Lessons</h3>
            </div>
          </div>
        </div>
        <footer class="fullWidth flex-row">

          <router-link
            tag="div"
            class="btn_nextSection width70"
            to="/register"
          >
            <h2>Register new pupil</h2>
          </router-link>
        </footer>

      </div>

    </main>
  </div>
</template>

<script>
  import axios from 'axios';
  import allPupils from '../accounts/ViewAllPupils.vue';
  import newPupils from '../accounts/ApplicantPupils.vue';
  import allLessons from '../lesson/ViewAllLessons'


  export default {
    components: {
      // editTheForm: editForm,
      // addNewLesson:newLesson
      allPupils,
      newPupils,
      allLessons
    },
    data() {
      return {
        showNewPupils: true,
        showAllPupils: true,
        showAllLessons: false,
        todayDate: new Date()
        // showEdit:false,
        // showNewLesson:false,
        // pupilID: this.$route.params.id,
        // Pupil: [],
        // errors: []
      }
    },
    methods: {

      setViewAllPupil(){
        this.showNewPupils = false;
          this.showAllPupils = true;
        this.showAllLessons= false
      },
      setViewNewPupil(){
        this.showNewPupils = true;
        this.showAllPupils = false;
        this.showAllLessons= false
      },
      setViewAllLessons(){
        this.showNewPupils = false;
        this.showAllPupils = false;
        this.showAllLessons= true
      }
      // deletePupil() {
      //   const url = '/pupil/' + this.pupilID;
      //   axios.delete(url)
      //     .then(
      //       this.$router.push('/')
      //     )
      //     .catch(error => console.log(error))
      // },
      // registerPupil() {
      //   const url = '/pupil/registered/' + this.pupilID;
      //   axios.put(url)
      //     .then(
      //       this.$router.push('/pupil/all')
      //     )
      //     .catch(error => console.log(error))
      // }

    },
    computed: {
      // previousLessons() {
      //   return this.Pupil.registration.previousLessons
      // },
      // theoryTest() {
      //   return this.Pupil.registration.theoryTest
      // },
      // provisional() {
      //   return this.Pupil.registration.provisional
      // },
      // availablilty() {
      //   return this.Pupil.availability
      // },
      // role() {
      //   return this.Pupil.role
      // },
      // pupilName() {
      //   return this.Pupil.firstName + " " + this.Pupil.lastName
      // },
      // lessons() {
      //   return this.Pupil.lessons
      // },
      // location() {
      //   return this.Pupil.location
      // },
      //
      // numberOfLessons(){
      //   return this.Pupil.lessons.length
      // },
      // blockBookings() {
      //
      //   return 10 - this.numberOfLessons
      // }
    }
    ,
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      //   const url = '/pupil/' + this.pupilID;
      //   axios.get(url)
      //     .then(res => {
      //
      //       console.log("This is the res");
      //       console.log(res);
      //       this.Pupil = res.data
      //     })
      //     .catch(error => console.log(error))
    },
  }

  // On load we need to load all lessons with todays date and tomorrow date
  // make it a computed property within the store


</script>

<style scoped>
.pageSection_60{
  padding: 15px 10px;
  /*background: #fff;*/
  overflow: scroll;
}

</style>
