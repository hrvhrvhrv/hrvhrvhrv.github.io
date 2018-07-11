import Home from './components/Layout/Home.vue';
import Blank from './components/Layout/BlankComponent.vue';
import About from './components/info-pages/About.vue';
import Contact from './components/info-pages/Contact.vue';
import Prices from './components/info-pages/Prices.vue'
import VueRouter from 'vue-router'

import store from './store/store.js'

// blog component imports

import blogList from './components/blog/ListOfBlogPosts.vue'

import NewBlogPost from './components/blog/createBlog.vue';
import blogPostEdit from './components/blog/editBlog.vue';

// lesson components imports
import Lesson from './components/lesson/lesson.vue';
import NewLesson from './components/lesson/NewLesson.vue'
import AllLesson from './components/lesson/ViewAllLessons.vue';
import MontlyView from './components/lesson/MonthView.vue';

// pupil component imports
import Register from './components/accounts/Register.vue';
import AllPupils from './components/accounts/ViewAllPupils.vue';
import Applicant from './components/accounts/ApplicantPupils.vue';
import RegisteredProfile from './components/accounts/RegisteredProfile.vue';
import PupilProfile from './components/accounts/PupilProfile.vue';
import PupilProfileEdit from './components/accounts/PupilProfileEdit.vue';
import Login from './components/accounts/Login.vue';
import NonRegistered from './components/accounts/NonRegisteredPupil.vue';


// Instructor components
import InsturctorHomePage from './components/accounts/InstructorHomepage.vue';


// routes defined
export const routes = [
  {path: '/', component: Home},

  // Main site routes

  {path: '/price', component: Prices},
  {path: '/about-us', component: About},
  {path: '/contact', component: Contact},


  // Blog routes set with nested routing as children components / paths
  {path: '/blog', component: blogList},

  //  Lesson routes
  {path: '/lesson/new/:id', component: NewLesson},
  {path: '/lesson/:id', component: Lesson},
  {path: '/allLessons', component: AllLesson, meta: {adminOnly: true, loggedInOnly: false}},
  // components to be developed with  for monthly, weekly and daily lessons
  {path: '/MonthlyLessons', component: MontlyView, meta: {adminOnly: true, loggedInOnly: false}},
  {path: '/WeeklyLessons', component: AllLesson, meta: {adminOnly: true, loggedInOnly: false}},
  {path: '/DailyLessons', component: Blank, meta: {adminOnly: true, loggedInOnly: false}},

  {path: '/lesson/new', component: Lesson},
  {path: '/lesson/edit', component: Lesson, meta: {adminOnly: true, loggedInOnly: false}},


  //  Accounts
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/instructorHomepage', component: InsturctorHomePage, meta: {adminOnly: true}},
  {path: '/NotRegistered', component: NonRegistered},


  // {path: '/pupil/all', component: AllPupils, meta: {adminOnly: true, loggedInOnly: false}},
  {path: '/pupil/all', component: AllPupils},
  {path: '/pupil/applicants', component: Applicant},
  {path: '/pupil/:id', component: PupilProfile},
  {path: '/pupil/reg/:id', component: RegisteredProfile},
  {path: '/pupil/edit/:id', component: PupilProfileEdit},
];

// export default new VueRouter({mode: 'history', routes})
