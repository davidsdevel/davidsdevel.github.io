'use server'

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deletePost(id) {
    await prisma.post.delete({
        where: {
            id
        }
    })

    return {
        status: 'OK'
    }
}


export async function createPost() {
	
    const now = new Date()
    
    const data = await prisma.post.create({
        data: {
          created: now,
          updated: now,
          views: 0
        }
    });

	redirect(`/admin/${data.id}`);
}
