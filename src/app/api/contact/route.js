import { IncomingWebhook } from '@slack/webhook';

const url = process.env.SLACK_WEBHOOK_URL;

const webhook = new IncomingWebhook(url);

export async function POST(req) {
  const {name, email, message} = await req.json();

  await webhook.send({
    text: "Danny Torrence left a 1 star review for your property.",
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
    		"fields": [
    			{
    				type: "mrkdwn",
    				text: `*Message*:\n${message}`
    			}
    		]
    	}
    ]
  });

  return Response.json({
    status: 'OK'
  })
}
