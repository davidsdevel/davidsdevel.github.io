import { revalidatePath } from "next/cache";
import { z } from 'zod/v4';

const revalidationSchema = z.object({
    blogId: z.string().min(1),
    slug: z.string().min(1).max(200),
});

const API_KEY = process.env.REVALIDATION_SECRET;

export async function POST(request) {
    const authHeader = request.headers.get('authorization');
    if (!API_KEY || authHeader !== `Bearer ${API_KEY}`) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const parsed = revalidationSchema.safeParse(body);

        if (!parsed.success) {
            return Response.json({ error: 'Invalid input' }, { status: 400 });
        }

        const { blogId, slug } = parsed.data;

        if (blogId === process.env.LETTERCMS_BLOG_ID) {
            revalidatePath(`/blog/${slug}`)
        }

        return Response.json({ status: 'OK' });
    } catch {
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
