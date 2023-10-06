import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'text',
      required: true,
    },
  ],
}