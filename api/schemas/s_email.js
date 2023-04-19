import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sEmail',
  title: 'SEmail',
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
