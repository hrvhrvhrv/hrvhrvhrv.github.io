<template>
  <div>

    <div class="splash_header">
      <h1 class="title"></h1>
      <h2></h2>

    </div>
    <main class="flex-row">
      <!--the display tab-->
      <div class="pageSection_60">


      </div>
      <!-- the buttons -->
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Booked Lesson for {{fullName}}</h3>
        </header>
        <div class="images40_mainText_container">
          <h2 class="">Lesson Slot</h2>
          <h2 class="title">{{lessonSLot}}</h2>
          <h2 class="">Lesson Date</h2>
          <h2 class="title">{{lessonDate | moment(" Do MMMM YYYY") }}</h2>
          <h2 class="">Pick up Location</h2>
          <h2 class="title">{{lessonLocation}}</h2>
        </div>
        <footer class="fullWidth flex-row">
          <div
            class="btn_nextSection width30 backBtn"
            v-if="role === 'Applicant'"
            @click="deletePupil"
          >
            <h2>Reject</h2>
          </div>
          <router-link
            tag="div"
            class="btn_nextSection width70"
            :to="'/pupil/' + Pupil._id"
          >
            <h2>Return to Pupil Profile</h2>
          </router-link>
        </footer>

      </div>

    </main>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {


      return {
        attrs: [
          {
            key: 'today',
            highlight: {
              backgroundColor: '#ff8080',
              // Other properties are available too, like `height` & `borderRadius`
            },
            dates: [new Date(2018, 5, 21)]
          }
        ],
        postID: this.$route.params.id,
        errors: [],
        Lesson: [],
        Pupil: [],
        day: 15,
        month: 8,
        year: 2018,
        lessonyingdate: new Date()
      }
    },
    computed: {


      SingleBlogPost() {
        return this.$store.getters.singleBlogPost;
      },
      apiURLLesson() {
        return '/lesson/' + this.postID;
      },
      apiURLPupil() {
        return '/pupil/' + this.Lesson.pupilID;
      },
      lessonSLot() {
        return this.Lesson.lessonSLot
      }
      ,
      lessonDate() {
        return new Date(this.Lesson.lessonDate)
      },
      lessonLocation() {
        return this.Lesson.pickUpLocation
      },
      fullName() {
        return this.Pupil.firstName + ' ' + this.Pupil.lastName
      },
      thisDate() {
        let trimedDate = this.Lesson.lessonDate.substr(0, 10);
        let splitDateArray = trimedDate.split('-');
        this.year = parseInt(splitDateArray[0]);
        this.month = parseInt(splitDateArray[1]) - 1;
        this.day = parseInt(splitDateArray[2]) + 1;

        return trimedDate

      },
      newTimePlease() {
        return new Date(this.year, this.month, this.day)
      }


    },

    methods: {

      deletePost() {
        this.removeSingleBlogPost(this.apiURL).then(
          this.$router.push('/')
        )
      },
      getPupils(pupil) {
        let pupURL = '/pupil/' + pupil;


        console.log(pupURL)
        axios.get(pupURL)
          .then(res => {

            console.log("This is the res");
            console.log(res);
            this.Pupil = res.data;
            console.log("Pupil Data" + res.data)
          })
          .catch(error => console.log(error));
      }
    }
    ,
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      axios.get(this.apiURLLesson)
        .then(res => {

          console.log("This is the res");
          console.log(res);
          this.Lesson = res.data;


          // pupil ID taken from Response and passed to function to get pupil name and data from database
          let pupID = res.data.pupilId;
          this.getPupils(pupID)
        })
        .catch(error => console.log(error));

      console.log(new Date())
    },

  }
</script>

<style scoped>

</style>

