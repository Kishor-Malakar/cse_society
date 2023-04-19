import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkedin',
  title: 'Linkedin',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ]
})


