<template>
  <div class="lista">
      {{ title.toUpperCase() }}
      <br>
      <v-container>
          <v-layout row wrap>
              <v-flex v-for="item in items" :key="item.id" xs4>
                  <v-card v-if="title === 'Comics'">
                      <v-img contain="true" height="180px" :src="`${item.thumbnail.path}.jpg`"></v-img>
                      <v-card-title> {{ item.title }} </v-card-title>
                      <v-card-text> {{ item.description }} </v-card-text>
                  </v-card>
                  <!-- img v-bind:src="`${item.thumbnail.path}.jpg`"/-->
                  <v-card v-else>
                      <v-img contain="true" height="180px" :src="`${item.thumbnail.path}.jpg`"></v-img>
                      <v-card-title> {{ item.name }} </v-card-title>
                      <v-card-text> {{ item.description }} </v-card-text>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  name: 'Lista',
  props: { 
      items: Array,
      title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  //display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
    width: 30px;
    height: 30px;
    border-radius: 170px;
}
</style>
