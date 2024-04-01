import { defineMongooseModel } from '#nuxt/mongoose'

export const List = defineMongooseModel('List', {
  id: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true
  }
})