'use server'

import { z } from 'zod/v4'
import { sanitizeText } from '@/lib/sanitize'

const contactSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.email(),
    message: z.string().min(1).max(2000),
});

export async function sendContactMessage(name, email, message) {
    const parsed = contactSchema.parse({ name, email, message });

    const safeName = sanitizeText(parsed.name);
    const safeEmail = sanitizeText(parsed.email);
    const safeMessage = sanitizeText(parsed.message);

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        throw new Error('TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are not configured');
    }

    const text = [
        `<b>Name:</b> ${safeName}`,
        `<b>Email:</b> ${safeEmail}`,
        `<b>Message:</b> ${safeMessage}`,
    ].join('\n');

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'HTML',
        })
    });

    if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
    }

    return { status: 'OK' };
}
