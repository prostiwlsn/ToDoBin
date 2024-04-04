import { defineMongooseModel } from '#nuxt/mongoose'

export const Done = defineMongooseModel('Done', {
  listId: {
    type: String,
    required: true,
  },
  lineId: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})