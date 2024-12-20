'use server'

import { IncomingWebhook } from '@slack/webhook';

export async function sendContactMessage(name, email, message) {
    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

    await webhook.send({
        text: `${name} left a new message.`,
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Name*:\n${name}`
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Email*:\n${email}`
                }
            },
            {
                type: "section",
                fields: [
                    {
                        type: "mrkdwn",
                        text: `*Message*:\n${message}`
                    }
                ]
            }
        ]
    });

    return {
        status: 'OK'
    }
}


