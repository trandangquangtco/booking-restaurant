<template>
  <div class="contain">
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Số lượng</th>
          <th>Giới tính</th>
          <th>Buổi</th>
          <th>Vị trí</th>
          <th>Ngày đặt</th>
          <th>Món ăn</th>
          <th>Ý kiến</th>
          <th>Kênh</th>
          <th>Ghế</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tr" v-for="(item,index) in order" :key="item._id">
          <td>{{index+1}}</td>
          <td class="red">{{item.name}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.gend}}</td>
          <td>{{item.time}}</td>
          <td>{{item.pos}}</td>
          <td>{{item.date}}</td>
          <td>{{item.food}}</td>
          <td>{{item.idea}}</td>
          <td>{{item.ads}}</td>
          <td>{{item.seat}}</td>
          <td><button class="btn btn-danger" @click="del(item._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      order:[],
      seats:[],
      result: this.$store.state.result
    };
    },
   mounted() {
    axios
      .get("http://localhost:3000/book/getOrder")
      .then(response=>{
        $cookies.get('token')
        this.order = response.data
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  },
  methods: {
    del(id){
      axios
      .delete("http://localhost:3000/book/delorder/"+id)
      .then(response=>{
        alert('xoa thanh cong')
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
  computed: {
    test(){
      this.$store.dispatch('delItem')
    }
  },
};
</script>

<style lang='scss' scoped>
@import '../assets/style/Total.scss';
</style>