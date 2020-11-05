import { defineComponent, inject, watchEffect, DefineComponent } from 'vue'
import { FiledPropsDefine } from '../types'
import { SchemaFormContextKey } from '../context'
import { isObject } from '../utils'

type SchemaItemDefine = DefineComponent<typeof FiledPropsDefine>

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,

  setup(props) {
    const context: { SchemaItem: SchemaItemDefine } | undefined = inject(
      SchemaFormContextKey
    )

    if (!context) {
      throw Error('SchemaForm should be used')
    }

    const handleObjectFieldChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}

      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }
      props.onChange(value)
    }

    return () => {
      const { schema, rootSchema, value } = props
      const { SchemaItem } = context
      const properties = schema.properties || {}

      const currentValue: any = isObject(value) ? value : {}

      return Object.keys(properties).map((key: string, index: number) => {
        return (
          <SchemaItem
            schema={properties[key]}
            rootSchema={rootSchema}
            value={currentValue[key]}
            key={index}
            onChange={(v: any) => handleObjectFieldChange(key, v)}
          />
        )
      })
    }
  }
})
