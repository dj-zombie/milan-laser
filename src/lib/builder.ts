import { Builder } from '@builder.io/sdk';
import dotenv from 'dotenv';

dotenv.config();

// Create a new builder instance
export const builder = new Builder({
  apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  userAttributes: {
    urlPath: '/'
  }
});
