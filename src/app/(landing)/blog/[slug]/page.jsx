import request from "lib/cms/request"
import { notFound } from "next/navigation";
import Article from "@/components/blog/article"
import prisma from "@/lib/prisma";

function getPost(slug) {
    return prisma.post.findFirst({
        where: {
            status: 'PUBLISHED',
            slug
        }
    })
}

export async function generateMetadata({params}) {
    const {slug} = params;

    const data = await getPost(slug);

    if (!data)
        return notFound();

    return {
        title: `${data.title} | David's Devel  - Blog`
    }
}

export default async function Page({params}) {
    const {slug} = params;

    const data = await getPost(slug);

    if (!data)
        return notFound();

    return <Article post={data}/>
}
