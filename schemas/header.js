import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'scoietyLogo',
      title: 'SocietyLogo',
      type: 'image',
      options: { 
        hotspot: true,
      },
    }),
    defineField({
      name: 'scoietyDesc',
      title: 'SocietyDesc',
      type: 'text',
    }),
    ]
})

 