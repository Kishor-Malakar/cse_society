import {createClient} from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: 'zjxzys0o',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-04-15',
  token: process.env.REACT_APP_APITOKEN

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

