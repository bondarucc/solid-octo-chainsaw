import { prisma } from "../src/initDB.ts"

async function seed() {
  const result = await prisma.user.create({
    data: {
      login: "some_login",
      pwd: "$2b$10$dZXSICjBd1WZ9JRvFcM3/OAgYgW.4zBPu5IlTs.xbRt2R0jUlIsIm",
      role: "ADMIN"
    }
  })
  console.log(JSON.stringify(result));
  
}

seed().then(() => {
  console.log("SEEDED");
  
})