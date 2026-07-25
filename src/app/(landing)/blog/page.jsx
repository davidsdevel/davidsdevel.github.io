import Blog from "@/app/(landing)/blog/_components/home"
import request from "@/lib/cms/request";

export const metadata = {
    title: 'Entradas - David\'s Devel',
    description: 'Blog enfocado en crecimiento digital, desarrollo web y marketing inbound'
}

export default async function Page({searchParams}) {
    const {page = '1'} = await searchParams;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);

    const {data} = await request(`/posts?status=PUBLISHED&page=${pageNum}&select=id,title,thumbnail,description,author,tags,slug`);

    const posts = Array.isArray(data)
        ? data.map(e => {
            const { password, ...author } = e.author || {};
            return { ...e, author };
        })
        : []

    return <Blog posts={posts} pagination={{ page: pageNum, total: 1 }}/>
}
