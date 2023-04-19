import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'facebook',
  title: 'Facebook',
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
