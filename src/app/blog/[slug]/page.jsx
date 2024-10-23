import request from "lib/cms/request"
import { notFound } from "next/navigation";
import Article from "@/components/blog/article"

export async function generateMetadata({params}) {
    const {slug} = params;

    const data = await request(`/posts/${slug}`)

    return {
        title: `${data.title} | David's Devel  - Blog`
    }
}

export default async function Page({params}) {
    const {slug} = params;

    const data = await request(`/posts/${slug}`)

    if (data?.status === 'not-found')
        return notFound();

    return <Article post={data}/>
}
