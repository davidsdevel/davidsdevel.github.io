import prisma from "@/lib/prisma";

export default async function sitemap() {
    const data = await prisma.post.findMany({
        where: {
            status: 'PUBLISHED'
        },
        select: {
            slug: true,
            updated: true
        },
        take: 50000
    });

    return [
      {
        url: 'https://www.davidsdevel.site',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.davidsdevel.site/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.davidsdevel.site/blog',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      },
      ...data.map(e => {
        return {
          url: `https://www.davidsdevel.site/blog/${e.slug}`,
          lastModified: e.updated,
          changeFrequency: 'weekly',
          priority: 1,
        }
      })
    ];
  }

