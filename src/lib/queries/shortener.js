import prisma from '@/lib/prisma';

export async function getUrls(page = 1) {
    const [urls, total] = await Promise.all([
        prisma.url.findMany({
            skip: (page - 1) * 10,
            take: 10,
            orderBy: {
                id: 'desc'
            }
        }),
        prisma.url.count()
    ]);
    
    return {
        urls,
        total
    }
}