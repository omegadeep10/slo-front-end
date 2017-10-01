<template>
  <div class="login-container">
    <div class="v-center-container">
      <div class="header">
        <img class="logo" src="../assets/mga_logo.jpg" alt="Middle Georgia State University Logo">
        <h1>MGA SLO Assessments</h1>
        <p>Please sign in to continue.</p>
      </div>

      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password">
        </div>
        <button type="submit" v-on:click="handleLogin()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from '../../utils/auth';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      formError: ''
    };
  },
  methods: {
      handleLogin() {
          login(this.email, this.password)
            .then(x => this.$router.push('/'))
            .catch(err => this.formError = err);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../styles/_variables'

.login-container
  position: relative
  min-height: 100vh

.v-center-container
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.header 
  .logo
    max-width: 200px
  
  h1
    font-family: "Roboto"
    font-weight: 700
    text-align: center
    font-size: 18px
    color: $mga-dark
    margin-top: 30px
  
  p
    font-family: "Roboto"
    font-weight: 400
    font-size: 14px
    color: #777
    margin-top: -5px
    text-align: center

form
  background-color: $mga-grey

</style>
