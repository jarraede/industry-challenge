// eslint-disable-next-line
/* eslint-disable */
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
      <v-card>
        <v-card-text>{{ response }}</v-card-text>
        <v-text-field label="Input" v-model="input"></v-text-field>
        <v-btn color="blue darken-1" flat @click="sendInput">Respond</v-btn>
      </v-card>
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
