<template>
  <div>
    <h1>This is an edit blog post component</h1>
    <form class="col-lg-6 " v-on:submit.prevent>
      <div class="form-group row">
        <label for="input-blog-title" class="col-sm-2 col-form-label">Blog Title</label>
        <div class="col-sm-10">
          <input type="text" v-model="SingleBlogPost.title" class="form-control" id="input-blog-title" placeholder="Title">
        </div>
      </div>
      <div class="form-group row">
        <label for="input-blog-text" class="col-sm-2 col-form-label">Blog Text</label>
        <div class="col-sm-10">
          <textarea v-model="SingleBlogPost.text" class="form-control" id="input-blog-text" rows="3"
                    placeholder="Enter blog post here "></textarea>

        </div>
      </div>


      <div class="form-group row">
        <div class="col-sm-10">
          <button class="btn btn--round btn-success" @click="submit">Save Changes</button>
          <button class="btn btn--round btn-warning" @click="cancel">Cancel</button>
          <button class="btn btn-danger" @click="deletePost" >Delete</button>


        </div>
      </div>
    </form>


  </div>
</template>

<script>
  import axios from 'axios';

  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        postID: this.$route.params.id,
        // BlogPosts: [],
        errors: [],
        GETapiURL: '/blog/' + this.$route.params.id

      }
    },
    computed: {
      SingleBlogPost() {
        return this.$store.getters.singleBlogPost;
      },

    },
    methods: {
      ...mapActions({
        getSingleBlogPost: 'loadSingleBlogPost',
        removeSingleBlogPost: 'deleteBlogPost',
        editBlogPost: 'editBlogPost'
      }),
      submit() {

        const blogData = {
          title: this.SingleBlogPost.title,
          text: this.SingleBlogPost.text
        };

        const URL = '/blog/' + this.postID;

        axios.put(URL , blogData)
          .then(res => {
            console.log(res);
            // this allows for redirecting to another page once code has been executed
            this.$router.push('/blog')
          }).catch(error => console.log(error))
      },
      cancel() {
        this.$router.push('/blog/post/' + this.postID)
      },
      deletePost() {
        this.removeSingleBlogPost(this.GETapiURL).then(
          this.$router.push('/')
        )
      }
    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {

      this.getSingleBlogPost('/blog/' + this.postID)
    },
  }
</script>

<style scoped>

</style>
