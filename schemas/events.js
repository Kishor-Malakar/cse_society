import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'eventImg',
      title: 'EventImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'eventName',
      title: 'EventName',
      type: 'string',
    }),
    defineField({
      name: 'eventDesc',
      title: 'EventDesc',
      type: 'string',
    }),
    ]
})

