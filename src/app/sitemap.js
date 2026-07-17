import request from "@/lib/cms/request";

//export const dynamic = "force-static";
//export const dynamicParams = true;

export default async function sitemap() {
  const {data: posts} = await request(`/posts?status=PUBLISHED&limit=1000&select=slug,updated`)

  return [
    {
      url: 'https://www.davidsdevel.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.davidsdevel.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.davidsdevel.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...posts.map(e => {
      return {
        url: `https://www.davidsdevel.com/blog/${e.slug}`,
        lastModified: e.updated,
        changeFrequency: 'weekly',
        priority: 1,
      }
    })
  ];
}
