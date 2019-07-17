<template>
  <div id="app">
    <Header></Header>
    <Assistant></Assistant>
    <Post></Post>
    <router-view/>`
  </div>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
import Post from '@/components/Post'
import Header from '@/components/Header'
import Assistant from '@/components/Assistant'
// import Firebase from 'firebase'

// var firebaseConfig = {
//     apiKey: "AIzaSyBGeENCVYw9RNLgCAAuHgan47YRrKi3Xhs",
//     authDomain: "atlantadatabase-f68d2.firebaseapp.com",
//     databaseURL: "https://atlantadatabase-f68d2.firebaseio.com",
//     projectId: "atlantadatabase-f68d2",
//     storageBucket: "atlantadatabase-f68d2.appspot.com",
//     messagingSenderId: "952824147314",
//     appId: "1:952824147314:web:5a9e5e7dd4148fe5"
//   };
//   // Initialize Firebase

// let app = Firebase.initializeApp(firebaseConfig)
// let db = app.database()
// let flights = db.ref('flights')

export default {
  name: 'App',
  components: {
    'Post': Post,
    'Header': Header,
    'Assistant': Assistant
  }
}
</script>

<style lang="scss">
#app {
  font-family: $body-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: get-color(black);
}
// .post {
//   display: inline-block;
// }
</style>
