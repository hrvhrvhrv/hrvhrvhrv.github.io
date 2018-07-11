<template>


  <div class="tab-layout-large">
    <h2 class="title">Registered Pupils</h2>
    <p>There are currently {{Pupils.length}} registered pupils</p>
    <hr>

    <div v-for="pupil in orderBy(Pupils, 'firstName') " class="Lesson-list-item flex-row">
      <!--<div v-for="pupil of Pupils" class="Lesson-list-item flex-row">-->
      <div class="flex-row space-between" style="width: 60%; padding: 10px">
        <div class="imageWrapper">
          <div class="profileImage">
              <h5 class="">{{pupil.firstName | capitalize}} {{pupil.lastName | capitalize}}</h5>
          </div>
        </div>
        <div class="text-container ">

            <p style="font-size: 1.5rem; padding-bottom: 10px">{{pupil.location}}</p>
            <p>{{pupil.lessons.length}} lessons</p>


        </div>
      </div>


      <div class="flex-row button-container">

        <router-link
          tag="div"
          :to="'/pupil/' + pupil._id"
          class="btn-base button2 btn-view"
          :key="pupil.id"
        >
          <i class="fas fa-user"></i>
          View
        </router-link>
      </div>
    </div>
  </div>


</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        Pupils: [],
        errors: []
      }
    },
    computed: {
      address() {
        return this.Pupils.pickUpLocation
      },
      role() {
        return this.Pupil.role
      }
    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      axios.get('/pupil/regList/Registered')
        .then(res => {
          // JSON responses are automatically parsed
          console.log(res);
          this.Pupils = res.data
        })
        .catch(error => console.log(error))
    },

  }
</script>

<style scoped>
  .tab-layout-large {
    width: 100%;
  }
  .imageWrapper{}
  .text-container{
    width: 60%;
    padding-top: 5px;
  }
</style>
