<template>
  <div class="contain">
    <form class="log">
        <h2>Login</h2>
        <br>
      <p>Account:</p>
      <input type="text" placeholder="Nhập tài khoản" v-model="signin.account" />
      <p>Password:</p>
      <input type="text" placeholder="Nhập mật khẩu" v-model="signin.password" />
      <br>
      <br>
      <button type="button" class="but" @click="login">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      signin: { account: "", password: "" }
    };
  },
  methods: {
    login() {
        let account = this.signin.account
        let password = this.signin.password
      axios
        .post("http://localhost:3000/admin-login", { account, password })
        .then(response => {
          if (response.data.error==false) {
            alert("dang nhap lai");
          } else {
            alert('Xin chao Admin')
            $cookies.set('token',response.data.token)
            this.$router.push('/total')
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../assets/style/Admin.scss';
</style>