// import { hashSync } from "bcrypt";
// import { Sub } from "../../generated/prisma/client.ts";
// import { CreateSubRequestBody } from "../api/sub/types.ts";
// import {prisma} from "../initDB.ts"


// export async function purgeDB() {
//   // console.log('purging db');
//   await prisma.paymentDetails.deleteMany()
//   await prisma.package.deleteMany()
//   await prisma.sub.deleteMany()
//   await prisma.user.deleteMany()

// }

// export async function seedDB() {
//   const generator = generateDummySub()
//   const sub1 = (await generator.next()).value

//   const sub2 = (await generator.next(sub1.id)).value
//   const sub3 = (await generator.next(sub1.id)).value

//   const sub4 = (await generator.next(sub2.id)).value
//   const sub5 = (await generator.next(sub2.id)).value

//   const sub6 = (await generator.next(sub3.id)).value
//   const sub7 = (await generator.next(sub3.id)).value
// }

// export function generateMockedSubRequest(replacements?: Partial<Sub>): CreateSubRequestBody {
//   return {
//     archive: replacements?.archive || "archive",
//     epg: replacements?.epg || "epg",
//     playlist: replacements?.playlist || "playlist",
//     stalkerPortal: replacements?.stalkerPortal || "stalkerPortal",
//     note: replacements?.note || "note",
//     pwd: hashSync(replacements?.pwd || "pwd", 10),
//     attractorId: replacements?.attractorId || null,
//     externalId: replacements?.externalId || generateRandomString(),
//     login: replacements?.login || generateRandomString(),
//     userId: replacements?.userId || null,
//     package: {
//       pkgType: "PREMIUM",
//       endDate: "2020-01-01",
//       startDate: "2020-01-01",
//       paymentDetails: {
//         paymentAmount: 1060,
//         paymentCurr: "EUR",
//         paymentDate: "2024-02-02"
//       }
//     }
//   }

// }

// // export async function* generateDummySub(): AsyncGenerator<Sub, never, string> {
// //   const dummySub = {
// //     archive: "archive",
// //     epg: "epg",
// //     playlist: "playlist",
// //     stalkerPortal: "stalkerPortal",
// //     note: "note",
// //     pwd: hashSync("pwd", 10),
// //     attractorId: null

// //   }

// //   let attractorId: string | null = null

// //   while (true) {
// //     attractorId = yield await prisma.sub.create(
// //       {
// //         data: {
// //           ...dummySub,
// //           externalId: generateRandomString(),
// //           login: generateRandomString(),
// //           attractorId,
// //           package: {
// //             create: {
// //               pkgType: "PREMIUM",
// //               endDate: new Date(),
// //               startDate: new Date(),
// //               paymentDetails: {
// //                 create: {
// //                   paymentAmount: 100,
// //                   paymentCurr: "EUR",
// //                   paymentDate: new Date()
// //                 }
// //               }
// //             }
// //           }
// //         }
// //       }
// //     )


// //   }
// // }

// export function generateRandomString(): string {
//   const chars =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';

//   for (let i = 0; i < 10; i++) {
//     const index = Math.floor(Math.random() * chars.length);
//     result += chars.charAt(index);
//   }

//   return result;
// }