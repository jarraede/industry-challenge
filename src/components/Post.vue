<template>
  <div class="post">
        <v-container class = "cards">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="flight in flights" :key="flight.id">
                    <v-card flat class = "text-xs-center ma-3">
                        <v-responsive class = "pt-4">
                            <img src=../assets/plane2.png style="width:200px;height:200px;">
                        </v-responsive>
                        <!-- <v-card-text>
                            <div class="heading"> {{'wassup'}} </div>
                        </v-card-text> -->
                        <v-card-actions class = "pt-2">
                            <v-btn flat color = "dark grey" v-on:click="gotosite(flight.url)">
                                <v-icon smal left> {{flight.airline}} </v-icon>
                            </v-btn>
                            <span class>  {{flight.from + ' &#x2192; ' + flight.to}} </span>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm6 md4 lg3 v-for="hotel in hotels" :key="hotel.id">
                    <v-card flat class = "text-xs-center ma-3">
                        <v-responsive class = "pt-4">
                            <img src=../assets/hotel2.png style="width:200px;height:200px;">
                        </v-responsive>
                        <!-- <v-card-text>
                            <div class="heading"> {{'wassup'}} </div>
                        </v-card-text> -->
                        <v-card-actions class = "pt-2">
                            <v-btn flat color = "dark grey" v-on:click="gotosite(hotel.url)">
                                <v-icon smal left> {{hotel.line}} </v-icon>
                            </v-btn>
                            <span class>  {{hotel.city}} </span>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
  </div>
</template>

<script>
import db from '@/firebase'
// console.log(db)
export default {
  name: 'Post',
  data () {
    return {
      flights: [],
      hotels: []
    }
  },
  created () {
    db.collection('flights')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'airline': doc.data().airline,
            'price': doc.data().price,
            'to': doc.data().to,
            'from': doc.data().from,
            'url': doc.data().url
          }
          this.flights.push(data)
        })
      })
    db.collection('hotels')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'line': doc.data().line,
            'price': doc.data().price,
            'location': doc.data().location,
            'city': doc.data().city,
            'url': doc.data().url
          }
          this.hotels.push(data)
        })
      })
  },
  methods: {
    gotosite (url) {
      console.log(url)
      window.location.href = url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pt-4 {
    background-color: #494949;
}

.pt-2 {
  background-color: #D9D9D9;
}

</style>
