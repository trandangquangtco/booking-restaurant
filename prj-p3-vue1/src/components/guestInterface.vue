<template>
<div class="container-fluid">
   
      <div class="topbar">
         <h2 class="text-center">Welcome to Restaurant</h2>
      </div>
      <div class="main row">
         <div class="side col-2"></div>
         <table class="table table-hover col-6">
         <tr>
            <th>#</th>
            <th>Thông tin</th>
         </tr>
         <tr>
            <td>Tên</td>
            <td>{{profile.name}}</td>
         </tr>
         <tr>
            <td>Email</td>
            <td>{{profile.email}}</td>
         </tr>
         <tr>
            <td>Sinh nhật</td>
            <td>{{profile.birth}}</td>
         </tr>
         <tr>
            <td>Lịch sử đặt bàn</td>
            <td></td>
         </tr>
      </table>
      </div>   
   
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";

export default {
   name: 'guestInterface',
   data() {
      return {
         token:this.$cookies.get('guesttoken'),
         profile:{}
      }
   },
   mounted() {
      axios.defaults.withCredentials = false;
      axios.get('http://localhost:3000/guestProfile',{withCredentials: true})
      .then(response=>{this.profile = response.data;console.log(response.data)})
      .catch(function(error){
         console.log(error);
      })
   }
}
</script>

<style lang='scss' scoped>
@import '../assets/style/guestInterface.scss';
</style>