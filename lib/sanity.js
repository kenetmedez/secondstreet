import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'your-project-id', // find this in your Sanity.io project settings
  dataset: 'production', // or the dataset you created (usually "production")
  useCdn: true, // `false` if you want to always get the freshest data
});
