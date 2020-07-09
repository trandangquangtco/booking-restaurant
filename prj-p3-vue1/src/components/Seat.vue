<template>
   <div class="container">
      <table class="">
         <thead><div class="thead text-center">Door</div></thead>
         <tbody class="">
            <tr>
               <td class="text-center">A</td>
               <td v-for="(a) in 5" :key="a.id" @click="putA(a)"><input class="pick" type="button" v-model="numb[a-1]"></td>
            </tr>
            <tr>
               <td class="text-center">B</td>
               <td v-for="(b) in 5" :key="b.id" @click="putB(b)"><input class="pick" type="button" v-model="numb[b-1]"></td>
            </tr>
         </tbody>
      </table>
      <p>Bạn đã chọn ghế: {{sit.seat}}</p>
      <button type="button" class="btn btn-success" @click="conf">Confirm</button>
   </div>
</template>

<script>
import axios from 'axios'
export default {
   name:'seat',
   data() {
      return {
         numb:[1,2,3,4,5],
         sit:{seat:''}
      }
   },
   methods: {
      putA(a){
         return this.sit.seat = 'A'+a;
      },
      putB(b){
         return this.sit.seat = 'B'+b;
      },
      conf(){
         let seat = this.sit.seat
         console.log(this.sit);
         this.$store.dispatch('book',this.sit)
         this.$router.push('/Bill')
      }
   },
}
</script>

<style lang="scss" scoped>
   .container{
      position: relative;
      top:15px
   }
   .thead{
      width: 120px;
      height: 20px;
      border: solid 1px;
      background-color: gray;
   }
   .pick{
      width: 50px;
      height: 50px;
      background-image: url('../assets/image/Untitled.jpg');
      background-size: cover;
      border: none;
   }
   td{
      width: 50px;
      height: 50px;
      border: solid white 20px;
      // padding: 20px;
   }
</style>