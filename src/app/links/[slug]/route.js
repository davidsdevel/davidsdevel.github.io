import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export async function GET(req, { params }) {
    const { slug } = await params;

    if (!slug || typeof slug !== 'string') {
        return notFound();
    }

    try {
        const short = await prisma.url.findUnique({
            where: {
                slug
            }
        });

        if (!short)
            return notFound();

        prisma.url.update({
            where: {
                slug
            },
            data: {
                clicks: {
                    increment: 1
                }
            }
        }).catch(() => {});

        return redirect(short.url);
    } catch {
        return notFound();
    }
}