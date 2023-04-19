import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'youtube',
  title: 'Youtube',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ]
})

//sort
