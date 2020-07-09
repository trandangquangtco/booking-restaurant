<template>
   <div class="container">
      <form class="container">
    <h1 class="text-center">CHÀO MỪNG BẠN ĐẾN VỚI CHÚNG TÔI</h1>
    <div class="row">
    <div class="col-6">
    <div class="form-group">
    <label for="exampleInputEmail1">Tên người đặt</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên người đặt" v-model="order.name">
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Số lượng:</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Số lượng" v-model="order.amount">
    </div>
    <p>Thời gian</p>
    <div class="form-group form-check form-check-inline">
    <input type="radio" class="form-check-input" id="exampleCheck1" name="time" value="Sáng" v-model="order.time">
    <label class="form-check-label" for="exampleCheck1">Sáng</label>
    </div>
    <div class="form-group form-check form-check-inline">
    <input type="radio" class="form-check-input" id="exampleCheck2" name="time" value="Trưa" v-model="order.time">
    <label class="form-check-label" for="exampleCheck1">Trưa</label>
    </div>
    <div class="form-group form-check form-check-inline">
    <input type="radio" class="form-check-input" id="exampleCheck3" name="time" value="Tối" v-model="order.time"> 
    <label class="form-check-label" for="exampleCheck1">Tối</label>
    </div>
    <p></p>
    <p>Địa điểm</p>
    <div class="form-group form-check form-check-inline">
    <input type="radio" class="form-check-input" id="exampleCheck3" name="pos" value="Trong" v-model="order.pos">
    <label class="form-check-label" for="exampleCheck1">Trong</label>
    </div>
    <div class="form-group form-check form-check-inline">
    <input type="radio" class="form-check-input" id="exampleCheck3" name="pos" value="Ngoài" v-model="order.pos">
    <label class="form-check-label" for="exampleCheck1">Ngoài</label>
    </div>
    <p></p>
    <p>Giới tính</p>
    <div class="form-group form-check form-check-inline">
    <input type="radio" class="form-check-input" id="exampleCheck3" name="gend" value="Nam" v-model="order.gend">
    <label class="form-check-label" for="exampleCheck1">Nam</label>
    </div>
    <div class="form-group form-check form-check-inline">
    <input type="radio" class="form-check-input" id="exampleCheck3" name="gend" value="Nữ" v-model="order.gend">
    <label class="form-check-label" for="exampleCheck1">Nữ</label>
    </div>
    </div>
    <div class="col-6">
    <div class="form-group">
    <label for="exampleInputPassword1">Ngày đặt:</label>
    <input type="Date" class="form-control" id="exampleInputPassword1" placeholder="Chọn ngày đặt" v-model="order.date">
    </div>
    <p></p>
    <div class="form-group">
    <label for="exampleInputPassword1">Chọn món:</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Chọn món" list="menu" v-model="order.food">
    <datalist id="menu">
      <option value="cá">fish</option>
      <option value="bò">beef</option>
      <option value="tôm">shrimp</option>
      <option value="lợn">pork</option>
      <option value="cua">crab</option>
    </datalist>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Yêu cầu thêm:</label>
    <textarea rows="3" class="form-control" id="exampleInputPassword1" placeholder="Yêu cầu thêm" v-model="order.idea"></textarea>
  </div>
  <p></p>
  <div class="form-group">
  <label>Bạn biết Nhà hàng qua kênh nào:</label>
  <select class="form-control" id="exampleInputPassword1" v-model="order.ads">
    <option value='face'>Facebook</option>
    <option value='web'>Website</option>
    <option value='other'>Other</option>
  </select>
  </div>
  </div>
  </div>
  <button type="button" class="btn btn-success" @click="confirm">Xác nhận</button>
  <button type="reset" class="btn btn-danger">Xóa</button>
  </form>
   </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
    return {
      order:{
        name:'',amount:'',time:'',pos:'',gend:'',date:'',food:'',idea:'',ads:'',price:''
      }
    }
   },
   methods: {
      confirm(){
        this.$store.dispatch('book',this.order)
        this.$router.push('/seat')
        console.log(this.order);
      }
   },
};
</script>

<style scoped>

</style>