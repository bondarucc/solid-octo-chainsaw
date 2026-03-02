import { hashSync } from "bcrypt"
import express from "express"
import { prisma } from "../../initDB.ts"
import { CreateUserRequestBody, CreateUserResponseBody } from "./types.ts"
import createNewSub from "../sub/createNewSub.ts"

const router = express.Router()

const PATH = "/users"

//Get full list of users
router.get(`/sec${PATH}`, async (_, res) => {
  const result = await prisma.user.findMany({
    omit: {
      pwd: true
    },
    include: {
      sub: true
    }
  })
  res.json(result)
})


//Create new user
// router.post(`/sec${PATH}`, async (req, res) => {
//   const user: CreateUserRequestBody = req.body

//   const result: CreateUserResponseBody
//     = await prisma.$transaction(async (tx) => {
//       if (user.sub) {
//         const newSub = await createNewSub(user.sub, tx)

//         return await tx.user.create({
//           data: {
//             login: user.login,
//             role: user.role,
//             pwd: hashSync(user.pwd, 10),
//             sub: {
//               connect: {
//                 id: newSub.id
//               }
//             }
//           }
//         })
//       } else {
//         return await tx.user.create({
//           data: {
//             login: user.login,
//             role: user.role,
//             pwd: hashSync(user.pwd, 10),
//             sub: {
//               connect: {
//                 id: user.subId
//               }
//             }
//           }
//         })
//       }
//     })


  
//   // const result: CreateUserResponseBody = await prisma.user.create({
//   //   data: {
//   //     login: user.login,
//   //     role: user.role,
//   //     pwd: hashSync(user.pwd, 10),
//   //     sub: user.subId == undefined
//   //       ? {
//   //         create: user.sub
//   //       }
//   //       : { connect: { id: user.subId } }
//   //   },
//   //   omit: {
//   //     pwd: true
//   //   }

//   // })
//   res.json(result)
// }) 

router.get(`${PATH}/:id`, async (req, res) => {

  const partner = await prisma.user.findFirst({
    where: {
      id: req.params.id
    }
  })
  res.json(partner)
})

export { router as userRouter }
