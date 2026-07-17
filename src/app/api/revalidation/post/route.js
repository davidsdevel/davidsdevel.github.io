import { revalidatePath } from "next/cache";
import jwt from 'jsonwebtoken';

export async function POST(request) {
    const body = await request.json();

    if (body.blogId === process.env.LETTERCMS_BLOG_ID) {
        revalidatePath(`/blog/${body.slug}`)
    } else {
        const secret = jwt.sign({blog: body.blogId}, process.env.LETTERCMS_SECRET, {expiresIn: '1h'});

        const blog = await fetch(`${process.env.LETTERCMS_API}/blogs/${body.blogId}?select=subdomain`, {
            headers: {authorization: `Bearer ${secret}`}
        }).then(res => res.json());

        revalidatePath(`/inces/${blog.subdomain}/${body.slug}`);
    }

    return Response.json({
        status: 'OK'
    });
}
