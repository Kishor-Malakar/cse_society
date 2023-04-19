import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'emailJs',
  title: 'EmailJs',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceId',
      title: 'ServiceId',
      type: 'string',
    }),
    defineField({
      name: 'templateId',
      title: 'templateID',
      type: 'string',
    }),
    defineField({
      name: 'publicKey',
      title: 'PublicKey',
      type: 'string',
    }),
  ]
})


