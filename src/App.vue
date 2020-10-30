<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="50" />
  <p>{{ name }}</p>
  <p>{{ nameRef }}</p>
  <p>{{ computedNameRef }}</p>
  <input type="text" v-model="name" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  ref,
  watchEffect,
  onMounted,
  onErrorCaptured
} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const state = reactive({
      name: 'Mars'
    })
    const nameRef = ref('Jack')

    setInterval(() => {
      // nameRef.value += 1
    }, 1000)

    const computedNameRef = computed(() => `My name is ${nameRef.value}`)
    watchEffect(() => {
      console.log(nameRef.value)
    })

    onMounted(() => {
      console.log('onMounted', nameRef.value)
      setTimeout(() => {
        nameRef.value = 'johjo'
      }, 3000)
    })
    onErrorCaptured(() => {
      console.log('error')
    })

    return {
      ...toRefs(state),
      nameRef,
      computedNameRef
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
