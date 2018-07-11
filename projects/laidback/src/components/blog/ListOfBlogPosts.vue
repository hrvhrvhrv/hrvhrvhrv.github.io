<template>



  <div>

    <div class="splash_header">
      <h1 class="title">Laidback Blog</h1>
      <p>Keep up to date with our latest news and information</p>
      <p>Dont forget to follow us on social media</p>
    </div>
    <main class="flex-row">

      <div class="pageSection_60">

        <h1 class="title">{{displayBlog.title}}</h1>
        <p>{{displayBlog.text}}</p>

      </div>
      <div class="pageSection_40">
        <header class="images40_header">
          <h3 class="title_large">Blog</h3>
        </header>

        <div class="images40_mainText_container">
          <div v-if="newBlogPostDiv">
            <!--<h1>New blog Post DIv</h1>-->
            <newBlogPost></newBlogPost>
          </div>
          <ul v-if="!newBlogPostDiv">


            <li
              v-for="(Post, id) in orderBy(BlogPosts, 'created') " class="blog-base "
              @click="showThisBlogPost(id)">
              <h2>{{Post.title}}</h2>
              <p style="text-align: right; padding-right: 5px; font-style: italic; margin-bottom: 0px; color: gray">
                Published {{Post.created | moment("Do MMMM YYYY")}}</p>
            </li>
          </ul>


        </div>
        <footer class="fullWidth flex-row" v-if="whatRole === 'Admin'">
          <div
            @click=""
            class="btn_nextSection width30 backBtn"

          >
            <h2></h2>
          </div>
          <div
            class="btn_nextSection width70" @click=" newBlogPostDiv = !newBlogPostDiv"

          >
            <h2>New Blog Post</h2>
          </div>
        </footer>
      </div>

    </main>
  </div>
</template>

<script>
  // mapActions imported form Vuex module
  import {mapActions} from 'vuex';
  import newBlogPost from '../blog/createBlog.vue'

  export default {
    components: {
      newBlogPost
    },
    data() {
      return {
        formSection: 0,
        displayBlog: [],
        newBlogPostDiv: false
      }
    },
    computed: {
      BlogPosts() {
        return this.$store.getters.blogPosts;
      },
      whatRole() {
        return this.$store.getters.userRole
      }
    },
    methods: {
      showThisBlogPost(num) {

        this.displayBlog = this.$store.getters.blogPosts[num];
        console.log(num);
        console.log(this.$store.getters.blogPosts);


      },

      //  ES2015 ... is a spreader function, it spreads all in the methods called within the mapActions function of Vuex
      ...mapActions({
        fetchBlogPosts: 'loadAllBlog',
        removeSingleBlogPost: 'deleteBlogPost'
      }),

      deletePost(URL) {
        this.removeSingleBlogPost(URL).then(
          this.$router.push('/blog')
        )
      },

    },
    // created lifecycle hook is a built in methodology of Vue JS, triggered when page is created
    created() {
      this.fetchBlogPosts();
    }
  }

</script>

<style scoped>
  .row {
    flex-direction: row;
  }

  .tab-layout-small {
    width: 30%;
  }

  .tab-layout-large {
    width: 70%;
    justify-content: start;
  }
</style>
