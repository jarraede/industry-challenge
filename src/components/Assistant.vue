
<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-container>
      <v-layout justify-center>
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      right
      fixed
      persistent
    >
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: 'Assistant',
  data () {
    return {
      drawer: null,
      input: ''
    }
  },
  methods: {
    sendInput () {
      this.input = ''
    }
  },
  computed: {
    response: function () {
      return 'How can I help you?'
    }
  }
}
</script>
