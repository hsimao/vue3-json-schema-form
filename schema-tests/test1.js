// Node.js require:
const Ajv = require('ajv')

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
    }
  },
  required: ['name', 'age']
}

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

ajv.addFormat('test', (data) => {
  return data === 'haha'
})

const validate = ajv.compile(schema)
const valid = validate({
  name: 'Mars',
  pets: ['dog', 'cat'],
  age: 30,
  isWorker: true,
  message: 'haha',
  email: 'mars@gmail.com'
})
if (!valid) console.log(validate.errors)
