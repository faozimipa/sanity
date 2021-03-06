import icon from 'react-icons/lib/fa/recycle'

export default {
  name: 'referenceTest',
  type: 'document',
  title: 'Reference test',
  description: 'Test cases for references',
  icon,
  fields: [
    {name: 'title', type: 'string'},
    {name: 'selfRef', type: 'reference', to: {type: 'referenceTest'}},
    {
      name: 'refToTypeWithNoToplevelStrings',
      type: 'reference',
      to: {type: 'typeWithNoToplevelStrings'}
    },
    {
      name: 'someWeakRef',
      type: 'reference',
      weak: true,
      to: {type: 'author'}
    },
    {
      name: 'array',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'strongAuthorRef',
          title: 'A strong author ref',
          to: {type: 'author'}
        },
        {
          type: 'reference',
          name: 'weakAuthorRef',
          title: 'A weak author ref',
          weak: true,
          to: {type: 'author'}
        }
      ]
    }
  ]
}
