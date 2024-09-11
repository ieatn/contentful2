import { createClient } from 'contentful';

const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

console.log('Space ID:', spaceId);
console.log('Access Token:', accessToken);

if (!spaceId || !accessToken) {
  console.error('Contentful space ID or access token is missing.');
  console.log('Space ID:', spaceId);
  console.log('Access Token:', accessToken);
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default client;