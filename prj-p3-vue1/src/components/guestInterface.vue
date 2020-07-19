<template>
   <div>
      <table>
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
      </table>
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
   },
   // computed: mapState(
   //    ['profile']
   // )
}
</script>

<style lang='scss' scoped>
@import '../assets/style/guestInterface.scss';
</style>