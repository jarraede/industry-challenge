<template>
  <v-expansion-panel>
    <v-expansion-panel-content
    >
      <template v-slot:header>
        <div>Plan better here</div>
      </template>
      <v-card>
        <v-card-text>{{ response }}</v-card-text>
        <v-text-field label="Input" v-model="input"></v-text-field>
        <v-btn color="blue darken-1" flat @click="sendInput">Respond</v-btn>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'Assistant',
  data () {
    return {
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

<style>
</style>
