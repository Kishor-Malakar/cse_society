import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'societyLogo',
      title: 'SocietyLogo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'societyDesc',
      title: 'SocietyDesc',
      type: 'text',
    }),
    ]
})

