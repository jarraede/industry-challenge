<template>
  <div class="post">
        <v-container class = "cards">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="place in list" :key="place.name">
                    <v-card flat class = "text-xs-center ma-3">
                        <v-responsive class = "pt-4">
                            <img :src= place.image style="width:400px;height:300px;">
                        </v-responsive>
                        <v-card-text>
                            <div class="heading"> {{""}} </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color = "grey">
                                <v-icon smal left> {{place.name}} </v-icon>
                                <span> Message </span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
  </div>
</template>

<script>
import db from '@/firebase'
export default {
  name: 'Post',
  data () {
    return {
      list: [
        {name: 'New York', image: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'},
        {name: 'Hawaii', image: 'https://www.fodors.com/wp-content/uploads/2018/12/UltimateHawaii__HERO_shutterstock_352827422.jpg'},
        {name: 'Rome', image: 'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200'},
        {name: 'Cancun', image: 'http://services.travelsavers.com/AMGService.svc/REST/GetImage?ImageID=aa5edd46-7636-e811-853f-782bcb667b27&Width=450'},
        {name: 'Orlando', image: 'https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_674895937.jpg'},
        {name: 'London', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg'},
        {name: 'Miami', image: 'https://img1.coastalliving.timeinc.net/sites/default/files/styles/landscape_3_2/public/image/2017/01/main/miami-florida-luxury-destination-2017-144863422.jpg'},
        {name: 'Las Vegas', image: 'https://s-ec.bstatic.com/images/hotel/max1024x768/170/170504164.jpg'},
        {name: 'Tahiti', image: 'https://www.tahitilegends.com/images/territories/tahiti.jpg'},
        {name: 'Bora Bora', image: 'https://s-ec.bstatic.com/images/hotel/max1024x768/149/149150580.jpg'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .text-xs-center ma-3 {
//     max-height: 300px;
//     width: 400px;
// }

</style>
