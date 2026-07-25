import { z } from 'zod/v4';
import { sendContactMessage } from '@/lib/telegram/webhook';

const contactSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.email(),
    message: z.string().min(1).max(2000),
});

export async function POST(request) {
    try {
        const body = await request.json();
        const parsed = contactSchema.safeParse(body);

        if (!parsed.success) {
            return Response.json({ error: 'Invalid input' }, { status: 400 });
        }

        const { name, email, message } = parsed.data;
        const result = await sendContactMessage(name, email, message);

        return Response.json(result);
    } catch {
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
