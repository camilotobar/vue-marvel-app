<template>
  <div class="users">
    <h1>Componente de Users</h1>
    <Lista :users="users"></Lista>
  </div>
</template>

<script>
import Lista from './Lista'
export default {
  name: 'Users',
  data: function(){
      return {
          users: [
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
