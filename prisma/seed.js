const { PrismaClient } = require('@prisma/client');

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
	const post = await prisma.post.create({
		data: {
			views: 0,
			title: 'Demo Post',
			content: '<h1>This is a demo post</h1>',
		}
	});

    const link = await prisma.url.create({
        data: {
            name: 'Google',
            url: 'https://www.google.com',
            slug: 'google'
        }
    });

	console.log({ post, link });
}

// execute the main function
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		// close Prisma Client at the end
		await prisma.$disconnect();
	});
