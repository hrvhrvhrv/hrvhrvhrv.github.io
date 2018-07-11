import axios from "axios";

import router from '../../routes'

export const state = {
  idToken: null,
  userId: null,
  userName: null,
  role: null
};

export const mutations = {
  authUser(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
    state.role = userData.role;
  },
  storeUser(state, user) {
    state.userName = user;
    state.role = user.role;
  },
  clearAuthData(state) {
    state.idToken = null;
    state.userId = null;
    state.role = null;

  }
};

export const actions = {

  //  Automatic logout timer
  //  After time passed by API has expired the user is automatically logged out
  setLogoutTimer({commit}, expirationTime) {
    setTimeout(() => {
      // commit('clearAuthData')
    }, expirationTime * 1000)
  },

  // //  Change this from the register data on the profile store module
  // signup({commit, dispatch}, authData) {
  //   axios.post('/account/register', {
  //     email: authData.email,
  //     password: authData.password,
  //
  //   })
  //     .then(res => {
  //       console.log(res);
  //       commit('authUser', {
  //         token: res.data.idToken,
  //         userId: res.data._id
  //       });
  //       const now = new Date();
  //       const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
  //       localStorage.setItem('token', res.data.idToken);
  //       localStorage.setItem('userId', res.data.localId);
  //       localStorage.setItem('expirationDate', expirationDate);
  //       dispatch('storeUser', authData);
  //       dispatch('setLogoutTimer', res.data.expiresIn);
  //     })
  //     .catch(error => console.log(error));
  // },
  login({commit, dispatch}, authData) {
    return new Promise(resolve => {
      axios.post('/account/login', {
        email: authData.email,
        password: authData.password
      })
        .then(res => {
          console.log(res);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('userId', res.data.localId);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('role', res.data.role);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
            role:res.data.role

          });
          commit('storeUser', res.data);
          dispatch('setLogoutTimer', res.data.expiresIn);
          let role = res.data.role;
          let usedID = res.data.localId;
          resolve([role, usedID])
        })
        .catch(error => console.log(error))
    })

  },


  tryAutoLogin({commit}) {
    const token = localStorage.getItem('token');
    if (!token) {
      return
    }
    const expirationDate = localStorage.getItem('expirationDate');
    const now = new Date();
    if (now >= expirationDate) {
      return
    }
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('role');
    commit('authUser', {
      token: token,
      userId: userId, role:userRole
    })
  },
  logout({commit}) {
    commit('clearAuthData');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');

  },
  // storeUser({commit, state}, userData) {
  //   if (!state.idToken) {
  //     return
  //   }
  //   // axios.post('/users.json' + '?auth=' + state.idToken, userData)
  //   //   .then(res => console.log(res))
  //   //   .catch(error => console.log(error))
  // },
  fetchUser({commit, state}) {
    if (!state.idToken) {
      return
    }
    // axios.get('/users.json' + '?auth=' + state.idToken)
    axios.get('/pupil/' + state.userId)
      .then(res => {
        console.log(res)
        // const data = res.data
        // const users = []
        // for (let key in data) {
        //   const user = data[key]
        //   user.id = key
        //   users.push(user)
        // }
        // console.log(users)
        commit('storeUser', res)
      })
      .catch(error => console.log(error))
  }
};

export const getters = {
  user(state) {
    return state.userName
  },
  isAuthenticated(state) {
    return state.idToken !== null
  },
  userRole(state) {
    return state.role
  },
  userIdStore(state) {
    return state.userId
  }
};

