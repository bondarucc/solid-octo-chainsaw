import { hashSync } from "bcrypt";
import { prisma } from "../src/initDB.ts"

async function seed() {
  await prisma.user.create({
    data: {
      login: "some_login",
      pwd: hashSync("some_pwd", 10),
      role: "ADMIN",
      sub: {
        create: {
          archive: "archive",
          epg: "epg",
          playlist: "playlist",
          stalkerPortal: "stalkerPortal",
          note: "note",
          pwd: "pwd",
          attractorId: null,
          externalId: "externalId",
          login: "login",
          package: {
            create: {
              pkgType: "PREMIUM",
              endDate: new Date("2020-01-01"),
              startDate: new Date("2020-01-01"),
              paymentAmount: 1060,
              paymentCurr: "EUR",
              paymentDate: new Date("2024-02-02")
            }
          }
        }
      }
    }
  })
  
}

seed().then(() => {
  console.log("SEEDED");
  
})