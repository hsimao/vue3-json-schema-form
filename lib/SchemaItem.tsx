import { defineComponent, computed } from 'vue'
import { SchemaTypes, FiledPropsDefine } from './types'
import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'
import ObjectField from './fields/ObjectField'
import { retrieveSchema } from './utils'

export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })

    return () => {
      const { schema } = props

      const retrievedSchema = retrievedSchemaRef.value

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
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        default: {
          console.error(`${type} is not supported`)
        }
      }
      ;<StringField />

      return <Component {...props} schema={retrievedSchema} />
    }
  }
})
