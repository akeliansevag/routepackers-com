import { CollectionConfig, FieldHook } from 'payload/types';

const formatSlug: FieldHook = async ({ value, data }) => {
    // return formatted version of title if exists, else return unmodified value
    return data?.title?.replace(/ /g, '-').toLowerCase() ?? value;
};

const Blog: CollectionConfig = {
    slug: 'blog',
    admin: {
        useAsTitle: 'Blog',
    },
    access: {
        read: () => true,
    },
    auth: false,
    upload: {
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
            name: 'slug',
            type: 'text',
            hooks: {
                beforeChange: [
                    formatSlug,
                ],
            },
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true
        },
        {
            name: 'abstract',
            type: 'text',
            label: 'Abstract',
            required: true
        },
        {
            name: 'content',
            type: 'richText',
            label: 'Content',
            required: true
        },
        {
            name: 'author',
            type: 'text',
            label: 'Author',
            required: true
        },
        {
            name: 'publishDate',
            type: 'date',
            label: 'Publish Date',
            required: true
        },
        {
            name: 'tags',
            type: 'text',
            label: 'Tags',
            required: false
        },
        {
            name: 'metaTitle',
            type: 'text',
            label: 'Meta title',
            required: true
        },
        {
            name: 'metaDescription',
            type: 'text',
            label: 'Meta description',
            required: true
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

export default Blog;
