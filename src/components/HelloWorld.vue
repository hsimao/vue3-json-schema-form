<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ age }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true
  }
} as const // 使用 const 在後續調用 this.age 時才不會有 number | undefined 推斷

export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
  mounted() {
    this.age
  }
})
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
