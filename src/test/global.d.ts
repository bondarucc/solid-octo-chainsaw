import { PrismaClient } from "../../generated/prisma/client.ts";

declare global {
  var prisma: PrismaClient
}

export {}