<template>
  <div class="contain">
    <form class="login">
      <h2><span>Login</span><span> | </span><span class="create">Signup</span></h2>
      <div class="hide">
      <p>Email:</p>
      <input type="text" placeholder="Nhập Email" v-model="login.email" />
      <p>Password:</p>
      <input type="password" placeholder="Nhập Password" v-model="login.password" />
      <br>
      <br>
      <button type="button" class="signin" @click="guestLogin">Đăng nhập</button>
      </div>
    </form>
    <form class="signup">
      <p>Name:</p>
      <input type="text" placeholder="Nhập Tên" v-model="signup.name" />
      <p>Email:</p>
      <input type="text" placeholder="Nhập Email" v-model="signup.email" />
      <p>Password:</p>
      <input type="text" placeholder="Nhập Password" v-model="signup.password" />
      <p>Birth:</p>
      <input type="Date" class="birth" v-model="signup.birth" />
      <br><br>
      <button class="btnsignup" type="button" @click="guestSignup">Đăng kí</button>
    </form>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name:'guestlogin',
   mounted() {
      $('.create').click(function(){
         $('.signup').css('display','unset')
         $('.hide').hide()
      })
      $('.login span:first-child').click(()=>{
         $('.hide').show()
         $('.signup').hide()
      })
   },
   data() {
    return {
      login: { email: "", password: "" },
      signup: { name: "", email: "", password: "", birth: "" }
      };
   },
   methods: {
      guestLogin(){
         let email = this.login.email
         let password = this.login.password
         axios
         .post("http://localhost:3000/guest-login",{email,password})
         .then(response=> {
            if(response.data.error==false){
               alert('dang nhap lai')
            }else{
               let token = this.$cookies.set('guesttoken',response.data.token);
               // this.$store.dispatch('loadProfile',token)
               this.$router.push('/guestProfile')
            }
         })
         .catch(function(error) {
         console.log(error);
         })
      },
      guestSignup(){
         let name = this.signup.name
         let email = this.signup.email
         let password = this.signup.password
         let birth = this.signup.birth
         axios
         .post("http://localhost:3000/signup",{name,email,password,birth})
         .then(function(response) {
         // handle success
         console.log(response.data);
         })
         .catch(function(error) {
         // handle error
         console.log(error);
         })
         .finally(function() {
         // always executed
         });
      }
   },
};
</script>

<style lang='scss' scoped>
@import "../assets/style/guestLogin.scss";
</style>