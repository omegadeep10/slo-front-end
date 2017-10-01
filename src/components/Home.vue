<template>
  <div class="home-container">
    <h1>Welcome Scott Spangler. Let's Assess Your Students.</h1>
    <p class="subtext">Please select one of your incomplete classes or add a new one.</p>
    <div class="courses">
        <h3>Your Classes</h3>
        <div class="course" v-for="course in courses" :key="course.crn">
            <div class="course-info">
                <h4>{{ course.course_name }}</h4>
                <p><span>{{ course.crn }} - </span>{{ course.semester }} {{ course.course_year }}</p>
            </div>
            <div class="assessment-info">
                <p class="completed">12/46</p>
                <span>Assessments Completed</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { isLoggedIn } from '../../utils/auth';
import { getCourses } from '../../utils/courses'

export default {
  name: 'hello',
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
      }
  },
  mounted() {
      this.getCourses();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../styles/variables'

.home-container
    text-align: center
    padding-top: 100px
    height: 100vh
    background-color: #f1f1f1

h1
    text-align: center
    text-transform: uppercase
    font-family: "Roboto"
    font-weight: bold
    color: #333
    font-size: 26px

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


</style>
