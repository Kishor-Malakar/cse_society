import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tel',
  title: 'Tel',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ]
})

