import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  // projectId: '2x4wa77p',
  dataset: 'production',
  apiVersion: '2022-10-31',
  useCdn: true,
  token:
    'skzrrVz6ugNUtzyEh5M65rReWRPLW7VRrTm1pGuxhzkRpLonYt8wy7AK4BQopgcbgpAO2Wh5FPsUCPffngEYzj0m7KXr5aAonZ5pa4SZjPUgMYpaDPghAe6gHZ2rofqV1fyOehziBvxMflOYkVMB9GzcFWN3cR7Rxfy8wh1FHpCTianOEWbJ',
  // process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
