<template>
   <div>
      <form class="signup">
      <p>Name:</p>
      <input type="text" v-model="signup.name" />
      <p>Email:</p>
      <input type="text" v-model="signup.email" />
      <p>Password:</p>
      <input type="text" v-model="signup.password" />
      <p>Birth:</p>
      <input type="Date" class="birth" v-model="signup.birth" />
      <br><br>
      <button class="btn btn-primary signup" type="button" @click="guestSignup">Đăng kí</button>
    </form>
   </div>
</template>

<script>
export default {
   name:'guestsignup',
   data() {
      return {
      signup: { name: "", email: "", password: "", birth: "" }
      }
   },
   methods: {
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
}
</script>

<style lang="scss" scoped>
@import "../assets/style/guestLogin.scss";
</style>