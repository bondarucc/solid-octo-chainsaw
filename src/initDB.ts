import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from "../generated/prisma/client.ts";
import prismaConfig from "../prisma.config.ts"

const datasourceURL = prismaConfig.datasource?.url
if (!datasourceURL) throw "Invalid prisma config"

export const prisma = new PrismaClient({ adapter: new PrismaBetterSqlite3({ url: prismaConfig.datasource?.url }) })