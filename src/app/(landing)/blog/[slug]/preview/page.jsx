import { notFound } from "next/navigation";
import Article from "@/components/blog/article"
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "app/auth";

export function getPost(id) {
    return prisma.post.findFirst({
        where: {
            id
        }
    })
}

export async function generateMetadata({params}) {
    const {slug} = params;

    const session = await getServerSession(authOptions)

    if (!session)
        return notFound();

    const data = await getPost(slug);

    if (!data)
        return notFound();

    const title = `${data.title || 'Nueva entrada'} | David's Devel`;
    return {
        title
    }
}

export default async function Page({params}) {
    const {slug} = params;

    const session = await getServerSession(authOptions)

    if (!session)
        return notFound();

    const data = await getPost(slug);

    if (!data || !data?.previewContent)
        return notFound();

    data.content = data.previewContent;

    return <Article post={data}/>
}
