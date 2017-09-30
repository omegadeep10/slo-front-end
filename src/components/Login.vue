<template>
  <div class="hello">
    <h1>{{ formError }}</h1>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button v-on:click="handleLogin()">Submit</button>
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
</style>
