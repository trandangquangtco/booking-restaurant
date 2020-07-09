<template>
    <div class="contain">
        <table class="bill">
            <thead>
                <tr>
                <th>#</th>
                <th>Thông tin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Tên:</td>
                <td>{{result[0].name}}</td>
            </tr>
            <tr>
                <td>Số lượng</td>
                <td>{{result[0].amount}}</td>
            </tr>
            <tr>
                <td>Ngày đặt</td>
                <td>{{result[0].date}}</td>
            </tr>
            <tr>
                <td>Vị trí</td>
                <td>{{result[0].pos}}</td>
            </tr>
            <tr>
                <td>Giới tính</td>
                <td>{{result[0].gend}}</td>
            </tr>
            <tr>
                <td>Buổi</td>
                <td>{{result[0].time}}</td>
            </tr>
            <tr>
                <td>Món ăn</td>
                <td>{{result[0].food}}</td>
            </tr>
            <tr>
                <td>Ý kiến</td>
                <td>{{result[0].idea}}</td>
            </tr>
            <tr>
                <td>Ghế</td>
                <td>{{result[1].seat}}</td>
            </tr>
            </tbody>           
        </table>
        <button type="button" @click="done">Xong</button>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            result: this.$store.state.result
        }
    },
    methods: {
        done(){
        let name = this.result[0].name
        let amount = this.result[0].amount
        let time = this.result[0].time
        let pos = this.result[0].pos
        let gend = this.result[0].gend
        let date = this.result[0].date
        let food = this.result[0].food
        let idea = this.result[0].idea
        let ads = this.result[0].ads
        let seat = this.result[1].seat
        axios
        .post("http://localhost:3000/book/order", { name,amount,time,pos,gend,date,food,idea,ads,seat })
        .then(response => {
            console.log(response.data);
            this.$router.push('/')
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
    @import '../assets/style/Bill.scss';
</style>