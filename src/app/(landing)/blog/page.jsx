import Blog from "@/components/blog/home"
import prisma from "@/lib/prisma";

export const metadata = {
    title: 'David\'s Devel - Blog'
}

export default async function Page({searchParams: {page = '1'}}) {
    const [data] = await prisma.post.paginate({
        where: {
            status: 'PUBLISHED'
        },
        orderBy: {
            created: 'desc'
        }
    })
    .withPages({
        limit: 10,
        page: +page
    });

    return <Blog posts={data}/>
}

