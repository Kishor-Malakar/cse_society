import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'alumni',
  title: 'Alumni',
  type: 'document',
  fields: [
    defineField({
      name: 'alumniImg',
      title: 'AlumniImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkedinLink',
      title: 'LinkedinLink',
      type: 'string',
    }),
    defineField({
      name: 'alumniName',
      title: 'AlumniName',
      type: 'string',
    }),
    defineField({
      name: 'alumniCompany',
      title: 'AlumniCompany',
      type: 'string',
    }),
    defineField({
      name: 'graduationYear',
      title: 'GraduationYear',
      type: 'string',
    }),
    ]
})

