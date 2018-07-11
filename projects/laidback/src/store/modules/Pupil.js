import axios from "axios/index";


const state = {
  allPupils: {},
  SinglePupil: {}
};

const mutations = {
  'SET_ALL_PUPIL'(state, pupils) {
    state.allPupils = pupils;
  },

  'SET_SINGLE_PUPIL'(state, pupil) {
    state.SinglePupil = pupil;
  }

};

const actions = {
  loadSinglePupil: ({commit}, URL) => {
    axios.get(URL)
      .then(res => {
        if (res) {
          const Pupil = res.data;
          // console.log("This is the res");
          // console.log(res);
          commit('SET_SINGLE_PUPIL', Pupil);
        }
      })
      .catch(error => console.log(error))
  },
  loadAllPupil: ({commit}) => {
    axios.get('/pupil/')
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

  deletePupil: (URL) => {
    axios.delete(URL)
      .catch(error => console.log(error))
  }
};

const getters = {
  showAllPupils: state => {
    return state.allPupils;
  },
  showOnePupil: state => {
    return state.SinglePupil;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
