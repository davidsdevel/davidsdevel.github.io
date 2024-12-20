'use server'

import prisma from '@/lib/prisma'

export async function createUrl(title, url, slug) {
    await prisma.urls.create({
        data: {
            title,
            url,
            slug
        }
    });
}