import { CollectionConfig } from 'payload/types';

const States: CollectionConfig = {
  slug: 'states',
  admin: {
    useAsTitle: 'States',
  },
  access: {
    read: () => true,
  },
  auth: false,
  upload:{ 
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
        {
          name: 'thumbnail',
          width: 400,
          height: 300,
          position: 'centre',
        },
        {
          name: 'card',
          width: 768,
          height: 1024,
          position: 'centre',
        },
        {
          name: 'tablet',
          width: 1024,
          height: undefined,
          position: 'centre',
        },
      ],
      adminThumbnail: 'thumbnail',
      mimeTypes: ['image/*'],
},
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: false
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title',
      required: false
    },
    {
      name: 'metaDescription',
      type: 'text',
      label: 'Meta Description',
      required: false
    },
    {
      name: 'OGTitle',
      type: 'text',
      label: 'OG Title',
      required: false
    },
    {
      name: 'OGDescription',
      type: 'text',
      label: 'OG Description',
      required: false
    },
  ]
}

export default States;