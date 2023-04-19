import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerContent',
      title: 'BannerContent',
      type: 'string',
    }),
    defineField({
        name: 'bannerLink',
        title: 'BannerLink',
        type: 'string',
      }),
    defineField({
        name: 'linkDesc',
        title: 'LinkDesc',
        type: 'string',
      }),
  ],
})
