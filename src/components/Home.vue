<template>
  <div class="home-container">
    <app-navigation></app-navigation>
    <h1>Welcome Scott Spangler. Let's Assess Your Students.</h1>
    <p class="subtext">Please select one of your incomplete assessments or add a new one.</p>
    <p v-if="courses.length == 0">Please create a new course.</p>
    <div class="courses">
        <h3>Your Assessments</h3>
        <div v-on:click="deleteCourse(course.crn)" class="course" v-for="course in courses" :key="course.crn">
            <div class="course-info">
                <h4>{{ course.course_name }}</h4>
                <p><span>{{ course.crn }} - </span>{{ course.semester }} {{ course.course_year }}</p>
            </div>
            <div class="assessment-info">
                <p class="completed">00/00</p>
                <span>Assessments Completed</span>
            </div>
        </div>
        <router-link to="/new" class="add-new">Add New Assessment</router-link>
    </div>
  </div>
</template>

<script>
import { isLoggedIn } from '../../utils/auth';
import { getCourses, deleteCourse } from '../../utils/courses';
import AppNavigation from './AppNavigation.vue';

export default {
  name: 'Home',
  data() {
    return {
      courses: []
    };
  },
  methods: {
      isLoggedIn() {
          return isLoggedIn()
      },
      getCourses() {
          getCourses().then(res => {
              this.courses = res.data;
          })
          .catch(err => { console.log(err) });
      },
      deleteCourse(crn) {
        deleteCourse(crn)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        location.reload();
      }
  },
  mounted() {
      this.getCourses();
  },
  components: {
      'app-navigation': AppNavigation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../styles/variables'

.home-container
    text-align: center
    height: 100vh
    background-color: #f1f1f1

h1
    text-align: center
    text-transform: uppercase
    font-family: "Roboto"
    font-weight: bold
    color: #333
    font-size: 26px
    margin-top: 100px

.subtext
    text-align: center
    font-family: "Roboto"
    font-weight: 400
    color: #888
    font-size: 17px
    margin-top: 10px

.courses
    padding: 20px 30px
    max-width: 900px
    margin: 100px auto 0 auto
    text-align: left

    h3
        font-family: "Roboto"
        font-size: 20px
        text-align: left
        color: #444
        font-weight: 500
        margin-bottom: 30px

.course
    background-color: white
    text-align: left
    margin-bottom: 15px
    padding: 25px 30px
    border: 1px solid #cfcfcf
    transition: all .2s ease

    &:hover
        cursor: pointer
        border: 1px solid $mga-primary

    .course-info
        display: inline-block
        width: 50%

        h4
            font-family: "Roboto"
            font-weight: 500
            font-size: 18px
            color: #434343
        
        p
            font-family: "Roboto"
            font-weight: 500
            font-size: 14px
            margin-top: 10px
            color: #434343

            span
                color: #919191

    .assessment-info
        display: inline-block
        text-align: right
        width: 49%
        vertical-align: top

        .completed
            font-family: "Roboto"
            font-weight: 700
            font-size: 24px
            color: #434343
        
        span
            font-family: "Roboto"
            font-weight: 400
            font-size: 12px
            font-style: italic
            color: #ababab
            display: inline-block
            margin-top: 5px

.add-new
    font-family: "Roboto"
    font-size: 16px
    font-weight: 500
    padding: 15px 20px
    color: #444
    border: 2px solid #444
    background-color: white
    display: inline-block
    text-align: left
    text-decoration: none
    margin-top: 20px

    &:hover
        color: $mga-primary
        border: 2px solid $mga-primary
        cursor: pointer

</style>
