// eslint-disable-next-line
/* eslint-disable */
<template>
<<<<<<< HEAD
  <div class="assistant">
  <v-layout
    wrap
    style="height: 100%;"
  > <!-- make vertical along right side -->
=======
  <v-layout
    wrap
    style="height: 200px;"
  >
>>>>>>> b648384bfe4a8460231d2b3ce142f17d0b4791d7
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
<<<<<<< HEAD
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          v-on@click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
  </div>
=======
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
>>>>>>> b648384bfe4a8460231d2b3ce142f17d0b4791d7
</template>

<script>
export default {
  name: 'Assistant',
  data () {
    return {
      drawer: null,
<<<<<<< HEAD
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
=======
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
>>>>>>> b648384bfe4a8460231d2b3ce142f17d0b4791d7
    }
  }
}
</script>
<<<<<<< HEAD

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pa-1 {
    display: right;
}
</style>
=======
>>>>>>> b648384bfe4a8460231d2b3ce142f17d0b4791d7
