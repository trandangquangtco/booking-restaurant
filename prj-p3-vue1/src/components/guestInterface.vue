<template>
   <div>
      <button @click="clk">Click</button>
      <table>
         <tr>
            <th>#</th>
            <th>Thông tin</th>
         </tr>
         <tr>
            <td>Tên</td>
            <td></td>
         </tr>
         <tr>
            <td>Email</td>
            <td></td>
         </tr>
         <tr>
            <td>Sinh nhật</td>
            <td></td>
         </tr>
      </table>
   </div>
</template>

<script>
const headers = {
   "token": `${$cookies.get('guesttoken')}`
}
import axios from 'axios'

export default {
   name: 'guestInterface',
    data() {
      return {
         info:[],
         
      }
   },
   methods: {
      clk(){
      var token = $cookies.get('guesttoken')
      if(token == null){
         alert('chua dang nhap')
      }else{
      axios({
         method:'get',
         url: 'http://localhost:3000/guestProfile',
         headers: {
            "token": `${$cookies.get('guesttoken')}`
         }
      }).then(data => {
         console.log(data);
      })
      // .then(response=>{
      //    this.info = response.data
      //    console.log(response);
      //    console.log(headers);
      // })
      // .catch(function(error) {
      //   // handle error
      //   console.log(error);
      // })
      // .finally(function() {
      //   // always executed
      // });
      }
      }
   },
   // mounted() {
   //    var token = $cookies.get('guesttoken')
   //    if(token == null){
   //       alert('chua dang nhap')
   //    }else{
   //    axios
   //    .get("http://localhost:3000/guestProfile",console.log(token))
   //    .then(response=>{
   //       this.info = response.data
   //       console.log(response);
   //    })
   //    .catch(function(error) {
   //      // handle error
   //      console.log(error);
   //    })
   //    .finally(function() {
   //      // always executed
   //    });
   //    }
   // },
}
</script>

<style lang='scss' scoped>
@import '../assets/style/guestInterface.scss';
</style>