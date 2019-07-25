<template>
  <div class="characters">
    <h1>Characters</h1>
    <Lista :items="items"></Lista>
    <button>« Previous</button>
    <button>Next »</button>
  </div>
</template>

<script>
import Lista from './Lista'
export default {
  name: 'Characters',
  data: function(){
      return {
          items: [
                { id: '1', name: 'Camilo' },
                { id: '2', name: 'Juan' }
            ]
      }
  },
  components: 
  {
      Lista
  },
  props: { }
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
