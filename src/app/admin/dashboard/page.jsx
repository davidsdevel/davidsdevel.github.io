import prisma from "@/lib/prisma";
import Posts from './components/posts';

export const dynamic = 'force-dynamic';

export const metadata = {
	title: 'Entradas - David\'s Devel',
};

export default async function Page({searchParams: { page = '1', status }}) {
	const where = {};

	if (status) {
        where.status = status;
	}

    const [data, meta] = await prisma.post.paginate({
        where,
        orderBy: {
            created: 'desc'
        }
    })
    .withPages({
        limit: 10,
        page: +page
    });

	return <Posts data={data} meta={meta} />
}
