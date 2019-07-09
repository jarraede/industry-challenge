<template>
  <div id="app">
    <Header></Header>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Assistant></Assistant>
    <router-view/>
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
  margin-top: 60px;
}
.post {
  display: inline-block;
}
</style>
