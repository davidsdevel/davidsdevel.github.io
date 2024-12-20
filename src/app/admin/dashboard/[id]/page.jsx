import prisma from '@/lib/prisma';
import EditorPage from './components';


export const metadata = {
	title: 'Editar Entrada - David\'s Devel',
};

export default async function Page({params: {id}}) {
    const post = await prisma.post.findFirst({where: {id}})

    return <EditorPage post={post}/>
}
