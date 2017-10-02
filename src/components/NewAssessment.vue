<template>
    <div class="new-container">
        <nav>
            <div class="nav-container">
            <router-link tag="div" to="/" class="close">
                ✖
            </router-link><!--
            --><div v-on:click="goToSection(1)" v-bind:class="[currentSection == 1 ? 'active' : '', 'section-nav']">
                <h3>Course Data</h3>
                <p>Add course details</p>
            </div><!--
            --><div v-on:click="goToSection(2)" v-bind:class="[currentSection == 2 ? 'active' : '', 'section-nav']">
                <h3>Add Students</h3>
                <p>Assign Students</p>
            </div><!--
            --><div v-on:click="goToSection(3)" v-bind:class="[currentSection == 3 ? 'active' : '', 'section-nav']">
                <h3>Assessments</h3>
                <p>Assess Students</p>
            </div>
            </div>

            <div class="status" v-on:click="goToSection(currentSection + 1)">
                <p>Next is Step 1 of 3</p>
                <h2>ADD STUDENTS</h2>
            </div>
        </nav>
        
        <section v-if="currentSection == 1" class="one">
            <header>
                <div class="header-container">
                    <h1>Add a New Course</h1>
                    <p>Enter your course information below to get started with the assessment process.</p>
                </div>
            </header>

            <form v-on:submit.prevent="createCourse()" class="new-course">
                <div class="input-group">
                    <div class="form-group">
                        <label for="crn">CRN</label>
                        <input type="text" name="crn" v-model="course.crn" size="5">
                    </div>

                    <div class="form-group">
                        <label for="title">Course Title</label>
                        <input type="text" name="title" v-model="course.course_name">
                    </div>
                </div>

                <div class="input-group">
                    <div class="form-group">
                        <label for="year">Year</label>
                        <input type="number" name="year" v-model="course.course_year" size="4">
                    </div>
                    <div class="form-group">
                        <label for="type">Type</label>
                        <select name="type" v-model="course.course_type">
                            <option value="F2F">F2F</option>
                            <option value="Online">Online</option>
                            <option value="V-CON">V-CON</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="semester">Semester</label>
                        <select name="semester" v-model="course.semester">
                            <option value="Fall">Fall</option>
                            <option value="Summer">Summer</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>

        <section v-if="currentSection == 2" class="two">
            <header>
                <div class="header-container">
                    <h1>Add Students</h1>
                    <p>Enter each student that is in your class. Your data is automatically saved as you type.</p>
                </div>
            </header>

            <form v-on:submit.prevent="createCourse()" class="new-course">
                <p>Not implemented yet</p>
            </form>
        </section>

        <section v-if="currentSection == 3" class="three">
            <header>
                <div class="header-container">
                    <h1>Assess Your Students</h1>
                    <p>For each student and each selected SLO, complete an assessment.</p>
                </div>
            </header>

            <form v-on:submit.prevent="createCourse()" class="new-course">
                <p>Not implemented yet</p>
            </form>
        </section>
  </div>
</template>

<script>
import { logout } from '../../utils/auth';
import { getProfile } from '../../utils/profile';
import { createCourse } from '../../utils/courses';

export default {
  name: 'NewAssessment',
  data() {
    return {
      currentSection: 1,
      course: {
        'crn': '',
        'faculty_id': '',
        'course_name': '',
        'course_type': 'F2F',
        'semester': 'Fall',
        'course_year': 2017
      },
      currentUser: {
        'first_name': '',
        'last_name': '',
        'faculty_id': 0,
        'email': '',
        'user_type': '0'
      }
    };
  },
  methods: {
      createCourse() {
        this.course.faculty_id = this.currentUser.faculty_id;
        let dateObj = new Date();
        dateObj.setFullYear(this.course.course_year);
        this.course.course_year = Math.round(dateObj.getTime()/1000);

        createCourse(JSON.parse(JSON.stringify(this.course)))
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        
        this.$router.push('/');

      },
      getProfileInfo() {
        getProfile()
          .then(res => {
            this.currentUser = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      },
      goToSection(section) {
          if (section <= 3) {
              this.currentSection = section;
          }
      }
  },
  mounted() {
      this.getProfileInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../styles/_variables'

nav
    height: 150px

.nav-container
    display: inline-block
    height: 100%

.section-nav
    display: inline-block
    height: 100%
    border-right: 2px solid #f1f1f1
    vertical-align: top
    padding: 0 30px
    padding-top: 60px
    position: relative

    &:hover
        cursor: pointer

        h3
            color: $mga-primary

    &.active

        &:after
            content: ""
            display: inline-block
            width: 100%
            left: 0
            position: absolute
            bottom: 0
            height: 10px
            background-color: $mga-primary

    h3
        font-family: "Roboto"
        font-size: 16px
        color: #272727
        font-weight: 700
        text-transform: uppercase
    
    p
        font-family: "Roboto"
        font-size: 14px
        margin-top: 5px
        color: #999999

.close
    font-size: 40px
    padding: 0 50px
    line-height: 150px
    display: inline-block
    height: 100%
    border-right: 2px solid #f1f1f1
    vertical-align: top
    transition: all .2s ease

    &:hover
        background-color: $mga-primary
        color: white
        cursor: pointer
        border-right: 2px solid $mga-primary

.status
    float: right
    display: inline-block
    height: 100%
    background-color: $mga-primary
    padding: 0 40px
    padding-top: 50px

    &:hover
        cursor: pointer
        background-color: $mga-dark
        transition: all .2s ease

    p
        color: rgba(255, 255, 255, .8)
        font-family: "Roboto"
        font-size: 14px
    
    h2
        color: white
        font-family: "Roboto"
        font-weight: bold
        font-size: 20px
        text-transform: uppercase
        margin-top: 5px

header
    background-color: #f1f1f1
    height: 250px

.header-container
    max-width: 1200px
    margin: 0 auto
    padding: 0 20px
    padding-top: 70px

    h1
        font-family: "Roboto"
        font-weight: 700
        font-size: 30px
        color: #4c4c4c
    
    p
        font-family: "Roboto"
        font-weight: 400
        color: #4c4c4c
        margin-top: 30px
        line-height: 25px
        font-size: 18px
        max-width: 500px

.new-course
    max-width: 1200px
    margin: 0 auto
    padding: 0 20px
    padding-top: 40px

.form-group
    display: inline-block
    margin-right: 20px

    label
        font-family: "Roboto"
        font-size: 14px
        font-weight: 500
        color: #8a8a8a
        display: block
        margin-bottom: 8px
    
    input, select
        padding: 5px 10px
        font-family: "Roboto"
        font-weight: 400
        font-size: 18px

.input-group
    margin-bottom: 40px

button[type=submit]
    font-family: "Roboto"
    font-size: 16px
    background-color: white
    border: 2px solid #444
    padding: 10px 15px
    color: #444
    font-weight: 500
    margin-top: 30px

    &:hover, &:focus
        color: $mga-primary
        border: 2px solid $mga-primary
        cursor: pointer

</style>
