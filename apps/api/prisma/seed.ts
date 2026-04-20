// import { hashSync } from "bcrypt";
// import {prisma} from "../src/initDB.ts";
// import createNewSub from "../src/api/sub/createNewSub.ts";

// export default async function seed() {
//   const externalId = process.env.ADM_EXT
//   const pwd = process.env.ADM_PWD
//   if (!externalId || !pwd) throw "NO ADM SETUP"

//   // await prisma.sub.upsert({
//   //   where: {
//   //     externalId
//   //   },
//   //   create: {
//   //     externalId,
//   //     user: {
//   //       create: {
//   //         login: externalId,
//   //         pwd: hashSync(pwd, 10),
//   //         role: "ADMIN"
//   //       }
//   //     },
//   //     package: {
//   //       create: {
//   //         startDate: new Date("2020-01-01"),
//   //         endDate: new Date("2028-01-01")
//   //       }
//   //     }
//   //   },
//   //   update: {}
//   // })
//   await createNewSub({
//     externalId,
//     user: {
//       login: externalId,
//       pwd: "pwd",
//       role: "ADMIN"
//     },
//     package: {
//       startDate: "2020-01-01",
//       endDate: "2028-01-01"
//     }
//   })
//   // await prisma.user.create({
//   //   data: {
//   //     login: "some_login",
//   //     pwd: hashSync("some_pwd", 10),
//   //     role: "ADMIN",
//   //     sub: {
//   //       create: {
//   //         archive: "archive",
//   //         epg: "epg",
//   //         playlist: "playlist",
//   //         stalkerPortal: "stalkerPortal",
//   //         note: "note",
//   //         pwd: "pwd",
//   //         attractorId: null,
//   //         externalId: "externalId",
//   //         login: "login",
//   //         package: {
//   //           create: {
//   //             pkgType: "PREMIUM",
//   //             endDate: new Date("2020-01-01"),
//   //             startDate: new Date("2020-01-01"),
//   //             paymentAmount: 1060,
//   //             paymentCurr: "EUR",
//   //             paymentDate: new Date("2024-02-02")
//   //           }
//   //         }
//   //       }
//   //     }
//   //   }
//   // })

// }

// seed().then(() => {
//   console.log("SEEDED");

// })