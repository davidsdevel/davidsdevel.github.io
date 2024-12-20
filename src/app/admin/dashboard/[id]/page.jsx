import EditorPage from './components';

export default async function Page({params: {id}}) {
    const post = await prisma.post.findFirst({where: {id}})

    return <EditorPage post={post}/>
}
