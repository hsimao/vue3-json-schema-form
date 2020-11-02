import { defineComponent } from 'vue'
import { SchemaTypes, FiledPropsDefine } from './types'
import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'

export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props

      // TODO: 如果 type 沒有指定, 需要猜測這個 type
      const type = schema.type

      let Component: any

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.error(`${type} is not supported`)
        }
      }
      ;<StringField />

      return <Component {...props} />
    }
  }
})
