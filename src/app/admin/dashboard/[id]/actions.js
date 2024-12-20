'use server'

import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

async function validateSlug(slug, id) {
    
    const post = await prisma.post.findFirst({
        where: {
            slug
        },
        select: {
            id: true
        }
    });

    if (post && post.id !== id) {
        return false;
    }

    return true;
}

export async function updatePost(id, data) {

    if (data.status === 'PUBLISHED') {
        if (!data.slug) {
            return {
                status: 'bad-request',
                message: 'Slug is required'
            }
        }

        const slugIsValid = await validateSlug(data.slug, id);

        if (!slugIsValid) {
            return {
                status: 'bad-request',
                message: 'Slug exists'
            }
        }
        
        const {published} = await prisma.post.findFirst({
            where: {
                id
            },
            select: {
                published: true
            }
        });

        const now = new Date();

        if (!published) {
            data.published = now;
        }

        data.updated = now;
    }

    await prisma.post.update({
        where: {
            id
        },
        data
    });

    if (data.status === 'PUBLISHED') {
        //TODO: Revalidate post
        
        redirect('/admin');
    } else {
        return {
            status: 'OK'
        }
    }
}
