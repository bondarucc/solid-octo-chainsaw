import "./initDB.js"
import { app } from "./configApp.js";
import seed from "../prisma/seed.js";

seed().then(() => {
  app.listen(3535, () => {
    console.log("Listening");
  })
})

// app.listen(3535, () => {
//   console.log("Listening");
// })

// console.log(12, f);
