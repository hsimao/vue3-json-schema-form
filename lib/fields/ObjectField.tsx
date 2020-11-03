import { defineComponent, inject, watchEffect } from 'vue'
import { FiledPropsDefine } from '../types'
import { SchemaFormContextKey } from '../context'

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,

  setup() {
    const context: any = inject(SchemaFormContextKey)

    return () => {
      const { SchemaItem } = context
      return <div>Object Field</div>
    }
  }
})
