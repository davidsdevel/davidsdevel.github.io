const { PrismaClient } = require('@prisma/client');

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    await prisma.url.create({
        data: {
            name: 'Whatsapp',
            url: 'https://www.google.com',
            slug: 'whatsapp'
        }
    });

	await prisma.url.create({
        data: {
            name: 'Discord',
            url: 'https://www.google.com',
            slug: 'discord'
        }
    });
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
