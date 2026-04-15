import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from "../generated/prisma/client.js";
import prismaConfig from "../prisma.config.js"

const datasourceURL = prismaConfig.datasource?.url
if (!datasourceURL) throw "Invalid prisma config"
console.log("creating prisma client instance");

export const prisma = new PrismaClient({ adapter: new PrismaBetterSqlite3({ url: prismaConfig.datasource?.url }) })
export default prisma