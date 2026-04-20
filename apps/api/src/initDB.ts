import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "../generated/prisma/client.js";
// import prismaConfig from "../prisma.config.js"

// const datasourceURL = prismaConfig.datasource?.url
// if (!datasourceURL) throw "Invalid prisma config"
// console.log("creating prisma client instance");

// export const prisma = new PrismaClient({ adapter: new PrismaBetterSqlite3({ url: prismaConfig.datasource?.url }) })
// export default prisma

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });
export {prisma}