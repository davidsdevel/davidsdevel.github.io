import Blog from "@/components/blog/home"
import prisma from "@/lib/prisma";

export const metadata = {
    title: 'Entradas - David\'s Devel'
}

export default async function Page({searchParams: {page = '1'}}) {
    const [data] = await prisma.post.paginate({
        where: {
            status: 'PUBLISHED'
        },
        orderBy: {
            published: 'desc'
        }
    })
    .withPages({
        limit: 10,
        page: +page
    });

    return <Blog posts={data}/>
}

