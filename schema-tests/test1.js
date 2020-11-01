// Node.js require:
const Ajv = require('ajv')
const localize = require('ajv-i18n')

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 4,
      maxLength: 10
    },
    age: {
      type: 'number'
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    message: {
      type: 'string',
      format: 'test'
    },
    testKeyword: {
      test: true
    }
  },
  required: ['name', 'age']
}

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

ajv.addFormat('test', (data) => {
  return data === 'haha'
})

ajv.addKeyword('test', {
  macro() {
    return {
      maxLength: 30,
      type: 'string',
      format: 'email'
    }
  }
  // compile(sch, parentSchema) {
  //   console.log('sch', sch)
  //   console.log('parentSchema', parentSchema)
  //   return () => true
  // },
  // metaSchema: {
  //   type: 'boolean'
  // }
  // validate(schema, data) {
  //   if (schema === true) return true
  //   else return data.length === 6
  // }
  // 自定義 error 訊息
  // validate: function fun(schema, data) {
  //   fun.errors = [
  //     {
  //       keyword: 'test',
  //       dataPath: '.testKeyword',
  //       schemaPath: '#/properties/testKeyword/test',
  //       params: { keyword: 'test' },
  //       message: 'Hello error message'
  //     }
  //   ]
  //   return false
  // }
})

const validate = ajv.compile(schema)
const valid = validate({
  name: 'Mars',
  pets: ['dog', 'cat'],
  age: 30,
  isWorker: true,
  message: 'haha',
  email: 'mars@gmail.com',
  testKeyword: 'hellogmail.com'
})
if (!valid) {
  localize['zh-TW'](validate.errors)
  console.log(validate.errors)
}
