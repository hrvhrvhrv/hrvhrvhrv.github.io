import axios from "axios/index";


export const state = {
  allBlogPosts: {},
  SingleBlogPost:{}
};

export const mutations = {
  'SET_ALL_BLOG_POSTS' (state, blogPosts) {
    state.allBlogPosts = blogPosts;
  },

  'SET_SINGLE_BLOG_POST' (state, blogPost) {
    state.SingleBlogPost = blogPost;
    }

};

export const actions = {
  loadSingleBlogPost: ({commit}, URL) => {
    axios.get(URL )
      .then(res => {
        if (res) {
          const blogPost = res.data;
        // console.log("This is the res");
        // console.log(res);
        commit('SET_SINGLE_BLOG_POST', blogPost);
      }
      })
      .catch(error => console.log(error))
  },
  loadAllBlog: ({commit}) => {
    axios.get('/blog/')
      .then(res => {
        if (res) {
          const blog = res.data;
          // console.log('this is from Actions JS');
          // console.log(blogs);
          commit('SET_ALL_BLOG_POSTS', blog);
        }
      })
      .catch(error => console.log(error))

  },

  deleteBlogPost: (URL) => {
    axios.delete(URL )
      .catch(error => console.log(error))
  }
};

export const getters = {
  blogPosts: state => {
    return state.allBlogPosts;
  },
  singleBlogPost: state => {

    return state.SingleBlogPost;

  }
};

