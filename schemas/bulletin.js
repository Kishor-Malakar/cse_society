import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bulletin',
  title: 'Bulletin',
  type: 'document',
  fields: [
    defineField({
      name: 'postImg',
      title: 'PostImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkText',
      title: 'LinkText',
      type: 'string',
    }),
    defineField({
      name: 'postLink',
      title: 'PostLink',
      type: 'string',
    }),
    ]
})

