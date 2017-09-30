<template>
  <div class="hello">
    <h1>Logged In: {{ isLoggedIn() }}</h1>
    <p>Home Page </p>
    <pre>{{ courses }}</pre>
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
</style>
