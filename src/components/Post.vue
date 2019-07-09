<template>
  <div class="post">
    <div class = "card">
        <v-layout>
            <v-flex xs4>
                <v-card>
                    <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline">Top 10 Australian beaches</span>
                        </v-flex>
                        </v-layout>
                    </v-container>
                    </v-img>
                    <v-card-title>
                    <div>
                        <span class="grey--text">Number 10</span><br>
                        <span>Whitehaven Beach</span><br>
                        <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
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
    margin: 10px;
    border-right: 10px;

}
.container {
    display: flex;
}
</style>
