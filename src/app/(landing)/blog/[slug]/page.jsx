import { notFound } from "next/navigation";
import Article from "./components/index"
import request from "@/lib/cms/request";

export const dynamic = "force-static";
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({params}) {
    const {slug} = await params;

    const data = await request(`/posts/${slug}?status=PUBLISHED&select=title,description,thumbnail,tags,published,updated`);

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
    const {slug} = await params;

    const data = await request(`/posts/${slug}?status=PUBLISHED&select=slug,id,title,description,thumbnail,content,published,updated,author,tags,category`);

    if (!data)
        return notFound();

    return <Article post={data}/>
}
