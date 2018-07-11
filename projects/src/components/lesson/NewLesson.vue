<template>
  <div>


      <div class="blog-headline">
        <h1>Book a lesson</h1>
        <hr>


        <p v-if="lessonDate !== '' ">{{ lessonDate | moment("dddd, MMMM Do YYYY") }} - {{lessonSLot}} -
          {{pickUpLocation}}</p>
      </div>

      <div class="tab-layout-container">
        <div class="tab-layout-small">

          <p>Select the date of a lesson</p>
          <v-date-picker
            :disabled-dates='{ weekdays: [1] }'
            v-model='lessonDate'
            is-inline
            :min-date='new Date()'
          >

          </v-date-picker>

        </div>
        <div class="tab-layout-large">
          <form class=" " @submit.prevent="onSubmit">
            <div class="form-group"><!--<form  v-on:submit.prevent>-->
              <div class="col-sm-10 form-group row">
                <label class="col-form-label">Select the time of a lesson</label>
                <select v-model="lessonSLot" class="form-control form-control-lg">
                  <option>8am</option>
                  <option>11am</option>
                  <option>2pm</option>
                </select>

              </div>
            </div>
            <div class="form-group">

              <div class="col-sm-10 form-group row">



                  <label class="col-form-label">Select the pick up location of the lesson</label>
                  <input type="text" v-model="pickUpLocation" class="form-control" placeholder="Location">

              </div>
            </div>
            <div class="form-group row justify-space-around">
              <div class="flex-row">
                <div class="btn-base btn-submit" @click="submit">
                  Submit
                </div>

                <div class="btn-base btn-clear" @click="clear">
                  Clear form
                </div>
              </div>

            </div>


          </form>

        </div>

      </div>

    </div>


</template>

<script>
  import axios from 'axios';

  export default {
    props: [],
    data() {
      return {

        // - - - - - -
        lessonSLot: '',
        lessonSlotPresets: ['morning', 'late morning', 'afternoon'],
        lessonDate: new Date(),
        pickUpLocation: '',
        pupilID: this.$route.params.id

      };
    }

    ,
    methods: {
      returnDate() {
        console.log(this.lessonDate)
      }
      ,
      submit() {
        const formData = {
          lessonSLot: this.lessonSLot,
          lessonDate: this.lessonDate,
          pickUpLocation: this.pickUpLocation,
          pupilID: this.pupilID
        };
        const URL = '/pupil/lesson/add/' + this.pupilID;
        console.log(formData);
        axios.post(URL, formData)
          .then(res => {
            if (res.data.message) {
              alert(res.data.message)
              // this.snackbar = true;
              // this.text = res.data.message;
            }

            console.log(res);
            // this allows for redirecting to another page once code has been executed
            // this.$router.go();
          }).catch(error => console.log(error))
        this.$router.go(this.$router.currentRoute)

      }
      ,
      clear() {
        this.lessonSLot = "";
        this.lessonDate = new Date();
        this.pickUpLocation = "";
      }
    }
  }
</script>

<style scoped>

</style>
