import { notFound } from "next/navigation";
import Article from "@/components/blog/article"
import prisma from "@/lib/prisma";

export function getPost(slug) {
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

    const title = `${data.title} | David's Devel`;
    const description = data.description;
    const images = {
        url: data.thumbnail
    };
    const keywords = data.tags;

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            images,
            type: 'article',
        },
        twitter: {
            title,
            description,
            images
        },
        article: {
            author: "David's Devel",
            published_time: data.published,
            modified_time: data.updated,
            tags: keywords
        }
    }
}

export default async function Page({params}) {
    const {slug} = params;

    const data = await getPost(slug);

    if (!data)
        return notFound();

    return <Article post={data}/>
}
