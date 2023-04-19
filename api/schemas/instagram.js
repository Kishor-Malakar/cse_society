import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'instagram',
  title: 'Instagram',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ]
})


