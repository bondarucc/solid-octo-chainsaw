import { prisma } from "../initDB.ts";

console.log("Global Jest configuration");

export default async () => {
  global.prisma = prisma
}