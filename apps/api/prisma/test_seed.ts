import { hashSync } from "bcrypt";
import { prisma } from "../src/initDB.js";
async function seed() {
  const login = process.env.ADM_LOGIN;
  const pwd = process.env.ADM_PWD;
  if (!login || !pwd)
    throw "NO ADM SETUP";
  await prisma.user.create({
    data: {
      role: "ADMIN",
      login,
      pwd: hashSync(pwd, 10),
      createdAt: new Date(),
    }
  })
}
console.log(hashSync("s", 10));


seed()
  .then(() => {
    console.log("SEEDED")
  })
  .catch(e => {
    console.log(e);
  })
  .finally(() => {
    prisma.$disconnect()
  })

