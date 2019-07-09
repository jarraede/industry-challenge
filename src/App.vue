<template>
  <div id="app">
    <Header></Header>
    <Post></Post>
    <Post></Post>
    <router-view/>
  </div>
</template>

<script>
import Post from '@/components/Post'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    'Post': Post,
    'Header': Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: $body-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: get-color(black);
  margin-top: 60px;
}
</style>
