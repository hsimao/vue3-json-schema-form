<template>
  <input type="text" :value="value" @input="handleChagne" />
</template>

<script lang="ts" setup="props">
import { FiledPropsDefine, Schema } from '../types'

export default {
  props: FiledPropsDefine
}

declare const props: {
  value: any
  onChange: (v: string) => void
  schame: Schema
}

export const handleChagne = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
