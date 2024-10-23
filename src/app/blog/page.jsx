import Blog from "@/components/blog/home"
import request from "lib/cms/request"

export const metadata = {
    title: 'David\'s Devel - Blog'
}

export default async function Page() {
    const {data} = await request('/posts?status=PUBLISHED')

    return <Blog posts={data}/>
}

