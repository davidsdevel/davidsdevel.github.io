'use server'

import prisma from '@/lib/prisma'
import { z } from 'zod/v4'

const ALLOWED_DOMAINS = ['davidsdevel.com', 'davidsdevel.site'];

const createUrlSchema = z.object({
    name: z.string().min(1).max(100),
    url: z.string().url().refine((val) => {
        try {
            const { hostname } = new URL(val);
            return ALLOWED_DOMAINS.some(d => hostname === d || hostname.endsWith('.' + d));
        } catch {
            return false;
        }
    }, 'URL must be from an allowed domain'),
    slug: z.string().min(1).max(50).regex(/^[a-zA-Z0-9_-]+$/),
});

export async function createUrl(name, url, slug) {
    const parsed = createUrlSchema.parse({ name, url, slug });

    await prisma.url.create({
        data: {
            name: parsed.name,
            url: parsed.url,
            slug: parsed.slug
        }
    });
}
