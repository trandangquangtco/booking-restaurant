<template>
  <div>
     <div class="container">
      <form>
         <input type="text" class="room" placeholder="room">
         <input type="text" class="pass" placeholder="pass"><button class="croom" type="button">room</button>
         <input type="text" class="name" placeholder="name"><button>Name</button>
         <div class="content"></div>
         <input type="textarea" class="msg" placeholder="message">
         <button class="send" type="button">Send</button>
         <button class="sendRoom" type="button">SendRoom</button>
      </form>
   </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import axios from 'axios'
export default {
   methods: {
    
   },
   mounted() {
      var socket = io.connect('http://localhost:3000');
      $('.send').click(()=>{
      let name = $('.name').val()
      let msg = $('.msg').val()
      socket.emit('send',{name,msg})
   });
      socket.on('send',data=>{
      $('.content').append(`<p>${data.name}: ${data.msg}</p>`)
   });
      socket.on('chat-room',result=>{
      $('.content').append(`<p>${result.name}: ${result.msg}</p>`)
   });
   $('.croom').click(()=>{
      let room = $('.room').val()
      let pass = $('.pass').val()
      let conf= [room,pass]
      socket.emit('room',conf)
   });
   $('.sendRoom').click(()=>{
      let name = $('.name').val()
      let msg = $('.msg').val()
      socket.emit('chat-room',{name,msg})
   });
   },
};
</script>

<style lang="scss" scoped>
.content{
         width: 300px;
         height: 300px;
         border: 1px solid;
         overflow-y: scroll;
      }
</style>