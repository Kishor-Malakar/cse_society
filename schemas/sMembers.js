import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sMembers',
  title: 'SMembers',
  type: 'document',
  fields: [
    defineField({
      name: 'memberImg',
      title: 'MemberImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'memberName',
      title: 'MemberName',
      type: 'string',
    }),
    defineField({
      name: 'bColour',
      title: 'BColour',
      type: 'string',
    }),
    defineField({
      name: 'linkedinLink',
      title: 'LinkedinLink',
      type: 'string',
    }),
    defineField({
      name: 'instagramLink',
      title: 'InstagramLink',
      type: 'string',
    }),

    defineField({
      name: 'memberPosition',
      title: 'MemberPosition',
      type: 'string',
    }),
    defineField({
      name: 'mIndex',
      title: 'MemberIndex',
      type: 'number',
    }),
    ]
})

