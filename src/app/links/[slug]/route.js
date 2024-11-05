import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export async function GET(req, {params: {slug}}) {
    const short = await prisma.url.findUnique({
        where: {
            slug
        }
    });

    if (!short)
        return notFound();

    await prisma.url.update({
        where: {
            slug
        },
        data: {
            clicks: {
                increment: 1
            }
        }
    });

    return redirect(short.url);
}