import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'apiLink',
      title: 'ApiLink',
      type: 'string',
    }),
    defineField({
      name: 'viewsCount',
      title: 'ViewsCount',
      type: 'string',
      description: 'Divide by 2,4,8.. depending on the count error'
    }),
    ]
})

