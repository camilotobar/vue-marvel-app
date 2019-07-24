<template>
  <div class="lista">
      Lista {{users.length}}
    <ul>
        <li v-bind:key="user.id" v-for="user in users">
            {{ user.name }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Lista',
  props: { 
      users: Array
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
