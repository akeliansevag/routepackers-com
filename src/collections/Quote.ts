import { MailtrapClient } from 'mailtrap'
import type { CollectionConfig } from 'payload/types'

export const Quote: CollectionConfig = {
  slug: 'quote',
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'zipCodeOrigin',
      type: 'text',
      label: 'Zip Code O',
      required: true,
    },
    {
      name: 'zipCodeDest',
      type: 'text',
      label: 'Zip Code D',
      required: true,
    },
    {
      name: 'carBrand',
      type: 'text',
      label: 'Car Brand',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Phone Number',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
    },
    {
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
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
          text: `There is a request for quotaion (zip origin: ${doc?.doc?.zipCodeOrigin}, zip code destination: ${doc?.doc?.zipCodeDest}), customer name is ${doc.doc.fullName} car brand is ${doc.doc.carBrand} adn the car model is ${doc.doc.carModel} ${doc.doc.yearOfPrd}, customer phone number: ${doc.doc.phoneNumber}, email is ${doc?.doc?.email}`,
          category: "Quote Request",
        })
        .then(console.log, console.error);
    }],
  }
}