import { MailtrapClient } from 'mailtrap'
import type { CollectionConfig } from 'payload/types'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  access: {
    create: () => true,
    read: () => true,
  },
  auth: false,
  fields: [
    {
      name: 'nickname',
      type: 'text',
      label: 'Nickname',
      required: true,
    },
    {
      name: 'review',
      type: 'text',
      label: 'Review',
      required: true,
    },
  ],
  hooks: {
    afterChange: [(doc) => {
      const TOKEN = process.env.PAYLOAD_NODEMAILER_PASSWORD;
      const ENDPOINT = "https://send.api.mailtrap.io/";
      const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

      const sender = {
        email: "support@routepackers.com",
        name: "RoutePackers",
      };
      const recipients = [
        {
          email: "info@routepackers.com",
        }
      ];
      client
        .send({
          from: sender,
          to: recipients,
          subject: "Dear Support Team",
          text: `There is a review from ${doc?.doc?.nickname} with the following details: ${doc?.doc?.review}`,
          category: "Review",
        })
        .then(console.log, console.error);
    }],
  }
}