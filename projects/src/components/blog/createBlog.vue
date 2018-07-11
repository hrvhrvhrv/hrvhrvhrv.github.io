<template>


  <form class=" " v-on:submit.prevent>
    <div class="form-group row">
      <label for="input-blog-title" class="col-sm-2 col-form-label">Blog Title</label>
      <div class="col-sm-10">
        <input type="text" v-model="title" class="form-control" id="input-blog-title" placeholder="Title">
      </div>
    </div>
    <div class="form-group row">
      <label for="input-blog-text" class="col-sm-2 col-form-label">Blog Text</label>
      <div class="col-sm-10">
        <textarea v-model="text" class="form-control" id="input-blog-text" rows="3"
                  placeholder="Enter blog post here "></textarea>

      </div>
    </div>


    <div class="form-group row">
      <div class="col-sm-10">
        <button class="btn btn--round btn-success" @click="submit">Save blog post</button>
        <button class="btn btn--round btn-danger" @click="">cancel</button>

      </div>
    </div>
  </form>

</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title: '',
        text: ''

      }
    },
    methods: {
      submit() {
        const blogPost = {
          title: this.title,
          text: this.text,
        };
        console.log(blogPost);
        axios.post('/blog/add', blogPost)
          .then(res => {
            console.log(res);
            // this allows for redirecting to another page once code has been executed
            this.$router.push('/blog')
          }).catch(error => console.log(error))
      },
      clear() {

      }
    }
  }
</script>

<style scoped>

</style>
