<template>
  <div class="lista">
      {{ title }}
      <ul>
        <li v-bind:key="item.id" v-for="item in items">
            <div v-if="title === 'Comics'">
                <i>{{ item.title }}</i>
                <img v-bind:src="`${item.thumbnail.path}.jpg`"/> <br>
            </div>
            <div v-else>
                <i>{{ item.name }}</i>
                {{ item.description }}<br>
            </div>
        </li>
    </ul>
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
