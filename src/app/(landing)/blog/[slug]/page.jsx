import { notFound } from "next/navigation";
import Article from "./components/index"
import request from "@/lib/cms/request";
import jwt from 'jsonwebtoken';

export const dynamic = "force-static";
export const dynamicParams = true;

export function getPost(slug) {
    return request(`/posts/${slug}?status=PUBLISHED`);
}

export function generateStaticParams() {
  return [];
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

    const secret = jwt.sign({blog: process.env.LETTERCMS_BLOG_ID}, process.env.LETTERCMS_SECRET, {expiresIn: '1h'})

    return <Article post={data} secret={secret} lettercmsEndpoint={process.env.LETTERCMS_API}/>
}
