import { PrismaClient } from '@prisma/client'
import { pagination } from 'prisma-extension-pagination';

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient().$extends(pagination());

if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = prisma

export default prisma;
