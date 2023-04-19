import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hod',
  title: 'HOD',
  type: 'document',
  fields: [
    defineField({
      name: 'hodImg',
      title: 'HODImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'hodName',
      title: 'HODName',
      type: 'string',
    }),
    defineField({
      name: 'hodDesc',
      title: 'HODDesc', 
      type: 'text',
    }),
    ]
})

