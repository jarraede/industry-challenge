<template>
  <div id="app">
    <Header></Header>
    <Assistant></Assistant>
    <Post></Post>
    <router-view/>`
  </div>
</template>

<script>
import Post from '@/components/Post'
import Header from '@/components/Header'
import Assistant from '@/components/Assistant'

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
