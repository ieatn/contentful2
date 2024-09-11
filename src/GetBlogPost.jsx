import client from './Client';

export async function getBlogPosts() {
  try {
    const response = await client.getEntries({
      content_type: 'recipe',
    });

    // Process the response to extract only the necessary fields
    const processedPosts = response.items.map(item => ({
      fields: {
        title: item.fields.title,
        content: item.fields.content ? item.fields.content.content[0].content[0].value : '',
        // Add other fields as needed, ensuring they are primitive values
      }
    }));

    return processedPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}