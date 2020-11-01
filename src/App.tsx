import { defineComponent, reactive, ref } from 'vue'

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
          <p>{name}</p>
          <p>{finalName}</p>
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
