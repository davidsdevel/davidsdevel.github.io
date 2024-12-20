import { PrismaClient } from '@prisma/client'
import { pagination } from 'prisma-extension-pagination';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient().$extends(pagination());
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient().$extends(pagination());
  }

  prisma = global.prisma;
}

export default prisma;