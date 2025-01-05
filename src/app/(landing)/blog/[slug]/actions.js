'use server'

import prisma from "@/lib/prisma"

export async function setView(id) {
    //TODO: Handle catch
    await prisma.post.update({
        where: {
            id
        },
        data: {
            views: {
                increment: 1
            }
        }
    })

    return true;
}
