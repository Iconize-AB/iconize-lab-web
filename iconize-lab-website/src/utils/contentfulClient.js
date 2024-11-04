import { createClient } from 'contentful';

function createSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

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
      slug: createSlugFromTitle(item.fields.title),
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
    // First get all articles
    const response = await client.getEntries({
      content_type: 'blog',
    });
    
    // Find the article where the generated slug matches our target slug
    const matchingItem = response.items.find(item => 
      createSlugFromTitle(item.fields.title) === slug
    );
    
    if (!matchingItem) {
      return null;
    }

    return {
      id: matchingItem.sys.id,
      slug: createSlugFromTitle(matchingItem.fields.title),
      title: matchingItem.fields.title,
      subtitle: matchingItem.fields.subtitle,
      content: matchingItem.fields.article || null,
      image: matchingItem.fields.image?.fields?.file?.url || null,
      tags: matchingItem.metadata?.tags?.map(tag => tag.sys.id) || []
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
} 