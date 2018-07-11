<template>

  <div class="tab-layout-large">

      <h4 class="title">Update your contact details</h4>
      <form class="col-lg-11 " v-on:submit.prevent>

        <div class="form-group row">
          <label class=" col-form-label">Email</label>
          <div class="col-md-11">
            <input type="text" v-model="Pupil.email" class="form-control" placeholder="Email">
          </div>
        </div>
        <div class="form-group row">
          <label class=" col-form-label">Phone Number</label>
          <div class="col-sm-11">
            <input type="text" v-model="Pupil.phoneNumber" class="form-control"
                   placeholder="Phone number">
          </div>
        </div>
        <div class="form-group row">
          <label class=" col-form-label">Pick Up Location</label>
          <div class="col-sm-11">
            <input type="text" v-model="Pupil.location" class="form-control"
                   placeholder="Location">
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-11">
            <!--<button class="btn-bas" @click="submit">Submit</button>-->
            <!--<button class="btn  btn-danger" @click="cancel">Cancel</button>-->

            <div class="flex-row">
              <div class="btn-base btn-submit"
                   @click="submit">
                Save changes
              </div>

              <!--<div class="btn-base btn-clear"-->
              <!--@click="deletePupil">-->
              <!--Reject as pupil-->
              <!--</div>-->
              <div class="btn-base btn-clear"
                   @click="cancel">
                Cancel
              </div>
            </div>

          </div>
        </div>
      </form>

  </div>

</template>

<script>
  import axios from 'axios';


  export default {
    props: ['Pupil'],

    data() {
      return {
        pupilID: this.$route.params.id,

        errors: []

      }
    }, computed: {
      userName() {
        return this.Pupil.firstName + ' ' + this.Pupil.lastName
      }
    },
    methods: {
      submit() {
        const URL = '/pupil/' + this.pupilID;

        const formData = {
          firstName: this.Pupil.firstName,
          lastName: this.Pupil.lastName,
          email: this.Pupil.email,
          phoneNumber: this.Pupil.phoneNumber,
          location: this.Pupil.location,
          // password: this.Pupil.password,
          // provisional: this.Pupil.registration.provisional,
          // theoryTest: this.Pupil.registration.theoryTest,previousLessons: this.Pupil.registration.previousLessons
        };


        axios.put(URL, formData)
          .then(res => {
            console.log(res);
            // this allows for redirecting to another page once code has been executed
this.$router.go()
          }).catch(error => console.log(error))
      },
      cancel() {
        this.$router.go(this.$router.currentRoute)
      },
      deletePupil() {
        // const url = '/pupil/' + this.pupilID;
        // axios.delete(url)
        //   .then(
        //     this.$router.push('/')
        //   )
        //   .catch(error => console.log(error))
      },
    }
    ,
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      // const url = '/pupil/' + this.pupilID;
      // axios.get(url)
      //   .then(res => {
      //
      //     console.log("This is the res");
      //     console.log(res);
      //     this.Pupil = res.data
      //   })
      //   .catch(error => console.log(error))
    },
  }
</script>

<style scoped>
  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .tab-layout-small {
    width: 80%;
  }
</style>
