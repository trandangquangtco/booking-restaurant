<template>
  <div class="contain">
    <div class="slide">
      <img src="../assets/image/home.jpg" alt="" id="lastcl">
      <img src="../assets/image/admin.jpg" alt="">
      <img src="../assets/image/background-guest.jpg" alt="">
      <img src="../assets/image/guestlogin.jpg" alt="">
      <img src="../assets/image/home.jpg" alt="">
      <img src="../assets/image/admin.jpg" id="firstcl" alt="">
    </div>
    <button type="button" @click="prevbtn" class="prev">Prev</button>
    <button type="button" @click="nextbtn" class="next">Next</button>
  </div>
</template>

<script>
export default {
  methods: {
    nextbtn(){
      const slide = document.querySelector('.slide')
      const img = document.querySelectorAll('.slide img')
      let counter = 1
      const size = img[0].clientWidth
      slide.style.transform = 'translateX("+(-size*counter)+" px)'
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/home.scss'
</style>