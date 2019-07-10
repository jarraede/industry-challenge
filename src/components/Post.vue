<template>
  <div class="post">
    <div class="card">
        <v-layout row wrap>
            <v-flex>
                <v-card>
                    <v-img
                    class="white--text"
                    height="300px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">Destination</span>
                            </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-actions>
                        <v-btn flat color="purple">&#9825;</v-btn>
                        <v-btn flat color="purple">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
    min-width: 300px;
    margin: 10px;
    display: flex;

}
// .container {
//     display: flex;
// }
</style>
