<template>
  <div id="app">
    <!--img alt="Vue logo" src="https://i2.wp.com/periodicovictoria.mx/wp-content/uploads/2017/04/banner-logo-marvel-2.jpeg" !-->
    <img alt="Vue logo" src="https://thumbs.gfycat.com/AdmiredExhaustedGermanshepherd-max-1mb.gif">

    <v-content>
      <router-view></router-view>
    </v-content>
    <br>
    <button v-on:click="changeCharacters">Characters</button>
    <button v-on:click="changeComics">Comics</button>
    <Lista v-if="inCharacters" :items="items" :title="'Characters'"/>
        <Lista v-else-if="inComics" :items="items" :title="'Comics'"/>
    <div>
      <button v-on:click="previousPage">« Previous</button>
      <button v-on:click="nextPage">Next »</button>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-console */
  import marvelApi from "./marvelApi";
  import Lista from "./components/Lista";

  const api = new marvelApi();

export default {
  name: 'app',
  components: { Lista },
  created: function(){
    this.requestToMarvel('characters');
  },
  data: function () {
      return {
        currentPage: 0,
        inComics: false,
        inCharacters: true,
        items: []
      }
  },
  methods: {
    changeCharacters: function () {
      this.inCharacters = true;
      this.inComics = false;
      this.requestToMarvel('characters');
    },
    changeComics: function () {
      this.inCharacters = false;
      this.inComics = true;
      this.requestToMarvel('comics');
    },
    previousPage: function () {
      
    },
    nextPage: function () {
      
    },
    requestToMarvel: function (type, options) {
      api.getData(type, options)
              .then(
                      (response) => {
                        console.log(response);
                        this.items = response.results;
                      }
              )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 100px;
}
</style>
