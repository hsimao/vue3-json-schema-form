import { defineComponent, reactive, ref } from 'vue'
import HelloWrold from './components/HelloWorld.vue'

const img = require('./assets/logo.png') // eslint-disable-line

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'Mars'
    })
    const nameRef = ref('sally')

    setTimeout(() => {
      state.name = 'hihi'
      nameRef.value = 'yoyo'
    }, 3000)

    const changeName = () => {
      state.name = 'changeName'
    }

    return () => {
      const finalName = nameRef.value
      const { name } = state
      const items = [{ title: 'title1' }, { title: 'title2' }]
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{name}</p>
          <p>{finalName}</p>
          <HelloWrold age={30} />
          <input type="text" v-model={state.name} />
          <ul>
            {items.map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>

          <button onClick={changeName}>click</button>
        </div>
      )
    }
  }
})
