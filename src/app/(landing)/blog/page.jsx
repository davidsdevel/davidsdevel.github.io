import Blog from "@/app/(landing)/blog/_components/home"
import request from "@/lib/cms/request";

export const metadata = {
    title: 'Entradas - David\'s Devel'
}

export default async function Page({searchParams}) {
    const {page = '1'} = await searchParams;

    const {data} = await request(`/posts?status=PUBLISHED&page=${page}&select=id,title,thumbnail,description,author,tags,slug`);

    //const [data] = await prisma.post.paginate({
    //    where: {
    //        status: 'PUBLISHED'
    //    },
    //    orderBy: {
    //        published: 'desc'
    //    }
    //})
    //.withPages({
    //    limit: 10,
    //    page: +page
    //});
    const posts = data
        ? data.map(e => {
            delete e.author.password;
            
            return e;
        })
        : []

    return <Blog posts={posts}/>
}
