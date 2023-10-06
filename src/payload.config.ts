import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import States from './collections/States';
import Blog from './collections/Blogs';
import { Quote } from './collections/Quote';
import { FAQ } from './collections/Faq';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import { Reviews } from './collections/Reviews';

export default buildConfig({
  serverURL: 'https://panel.routepackers.com',
  admin: {
    user: Users.slug,
  },
  csrf: [ // whitelist of domains to allow cookie auth from
    'http://localhost:3000',
    'https://routepackers.com',
  ],
  cors: '*',
  collections: [
    Users,
    Reviews,
    States,
    Blog,
    Quote,
    FAQ,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
