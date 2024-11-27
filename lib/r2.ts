import AWS from 'aws-sdk';

const endpoint = process.env.CLOUDFLARE_R2_ENDPOINT;
const token = process.env.CLOUDFLARE_R2_API_TOKEN;

if (!endpoint || !token) {
     throw new Error('Missing R2 configuration in environment variables');
   }

const r2Client = new AWS.S3({
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT as string , // R2 endpoint
  credentials: {
    accessKeyId: '', // Leave this blank when using an API token
    secretAccessKey: process.env.CLOUDFLARE_R2_API_TOKEN as string, // Use the API token here
  },
  region: 'auto', // R2 is globally distributed
  signatureVersion: 'v4',
});

export default r2Client;
