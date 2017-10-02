<template>
  <nav>
    <div class="nav-container">
      <h1>{{ currentUser.first_name }} {{ currentUser.last_name }}</h1>
      
      <div class="right-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/admin" v-if="currentUser.user_type === '1'">Admin</router-link>
          <button v-on:click="handleLogout()" class="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { logout } from '../../utils/auth';
import { getProfile } from '../../utils/profile';

export default {
  name: 'AppNavigation',
  data() {
    return {
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
      handleLogout() {
        logout();
        this.$router.push('/login');
      },
      getProfileInfo() {
        getProfile()
          .then(res => {
            this.currentUser = res.data;
          })
          .catch(err => {
            console.log(err);
          });
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
  background-color: transparent
  height: 100px
  text-align: left
  border-bottom: 1px solid #cfcfcf
  border-top: 1px solid #cfcfcf

.nav-container
  max-width: 1200px
  margin: 0 auto
  height: 100%
  padding: 0 20px

h1
  text-align: left
  font-family: "Roboto"
  font-weight: 700
  font-size: 18px
  color: #333
  line-height: 95px
  display: inline-block


.right-nav
  float: right
  line-height: 95px

  a
    font-family: "Roboto"
    font-size: 16px
    font-weight: 500
    color: #444
    text-decoration: none
    margin-right: 15px
    position: relative
    transition: all .2s ease

    &:hover
      color: $mga-primary

      &:after
        width: 100%

    &:after
      display: inline-block
      position: absolute
      content: ""
      height: 3px
      width: 0
      bottom: -5px
      left: 0
      background-color: $mga-primary
      transition: all .2s ease
  
  .router-link-active
    color: $mga-primary

    &:after
      width: 100%
  

  button
    font-family: "Roboto"
    font-weight: 500
    color: #444
    font-size: 16px
    border: 2px solid #444
    padding: 9px 15px 12px 15px
    background-color: white
    transition: all .2s ease
    border-radius: 4px

    &:hover
      color: $mga-primary
      cursor: pointer
      border: 2px solid $mga-primary  



</style>
