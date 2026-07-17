'use server'

import prisma from '@/lib/prisma'

export async function createUrl(name, url, slug) {
    await prisma.url.create({
        data: {
            name,
            url,
            slug
        }
    });
}
