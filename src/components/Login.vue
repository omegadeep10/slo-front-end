<template>
  <div class="hello">
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

label
  color: $gray
</style>
