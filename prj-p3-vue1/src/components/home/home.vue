<template>
  <div class="contain">
    <div class="header">
      <div class="logo">
        <img src="https://upload.wikimedia.org/wikipedia/vi/d/dc/Vinfast-logo.png" />
      </div>
      <div class="top-menu">
        <ul>
          <li>Trang chủ</li>
          <li>Thực đơn</li>
          <li>Địa điểm</li>
          <li>Đặt chỗ</li>
        </ul>
      </div>
    </div>
    <div class="side-bar"></div>
    <div class="body">
      <v-app class="carousel">
        <v-carousel class="in">
          <v-carousel-item v-for="(color, i) in colors" :key="i" :src="color.src">
            <v-sheet height="10%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <div class="content">
          <div class="content-1">
            <h4>Ăn thế nào cho đúng</h4>
            <div class="row">
              <div class="card col-3" style="width: 18rem;">
                <img src="../../assets/image/admin.jpg" class="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Dành cho người ăn kiêng</p>
                </div>
              </div>
              <div class="card col-3" style="width: 18rem;">
                <img src="../../assets/image/admin.jpg" class="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Dành cho người ăn chay</p>
                </div>
              </div>
              <div class="card col-3" style="width: 18rem;">
                <img src="../../assets/image/admin.jpg" class="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Dành cho người tập thể hình</p>
                </div>
              </div>
            </div>
          </div>
          <div class="content-2">
            <h4>Chương trình khuyến mãi</h4>
            <div class="row">
              <div class="card col-3" style="width: 18rem;">
                <img src="../../assets/image/admin.jpg" class="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Dành cho người ăn kiêng</p>
                </div>
              </div>
              <div class="card col-3" style="width: 18rem;">
                <img src="../../assets/image/admin.jpg" class="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Dành cho người ăn chay</p>
                </div>
              </div>
              <div class="card col-3" style="width: 18rem;">
                <img src="../../assets/image/admin.jpg" class="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Dành cho người tập thể hình</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-app>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script src = './home.js'>
</script>

<style lang="scss" scoped>
@import "./home.scss";
</style>