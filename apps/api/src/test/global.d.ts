import { PrismaClient } from "../../../../generated/prisma/client.ts";

declare global {
  var prismaGlobal: PrismaClient
}

export {}