import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'cImg',
      title: 'cImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
    ]
})

