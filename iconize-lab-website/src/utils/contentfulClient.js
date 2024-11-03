import { createClient } from 'contentful';

const client = createClient({
  space: 'xz6sgh9vz10r',  // I can see this from your URL
  accessToken: 'rIVKWeBd-6Rhq7j6yUp6syv6ZiE7di8knWk5os8XYfE', // You'll need to get this from Contentful settings
  environment: 'master'
});

export async function getAllArticles(tag = null) {
  try {
    const query = {
      content_type: 'blog',
    };

    // Add tag filter if specified
    if (tag) {
      query['metadata.tags.sys.id[in]'] = tag;
    }

    const response = await client.getEntries(query);
    
    return response.items.map(item => ({
      id: item.sys.id,
      slug: item.sys.id,
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      content: item.fields.article || null,
      image: item.fields.image?.fields?.file?.url || null,
      tags: item.metadata?.tags?.map(tag => tag.sys.id) || []
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'sys.id': slug
    });
    
    if (response.items.length === 0) {
      return null;
    }

    const item = response.items[0];
    return {
      id: item.sys.id,
      slug: item.sys.id,
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      content: item.fields.article || null,
      image: item.fields.image?.fields?.file?.url || null,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
} 