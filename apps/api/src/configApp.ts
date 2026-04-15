import express, { ErrorRequestHandler, json } from "express";

import cookieParser from "cookie-parser";

import { adminMiddleware } from "./api/auth/adminWiddleware.js";
import { authRouter } from "./api/auth/api.js";
import { authMiddleware } from "./api/auth/authMiddleware.js";
import { InternalError } from "./errorDict.js";
import { app } from "./initApp.js";
import { userRouter } from "./api/user/api.js";
import { subRouter } from "./api/sub/api.js";

export {app}

app.use(express.json())
app.use(cookieParser())
app.use(authMiddleware)
app.use(authRouter)
app.use("/sec", adminMiddleware)
app.use(userRouter)
app.use(subRouter)
// app.use("/", (req, res) => {
//   res.json("caught")
// })

//error handlers
app.use(function errorLogger(err, _, res, next) {
  console.log(`${new Date().toISOString()}: Err --> ${err.toString?.() || err}`)
  if (err instanceof InternalError) {
    console.log(err.stack);
    
  }
  next(err)
} satisfies ErrorRequestHandler)

app.use(function internalErrorHandler(err, _, res, next) {

  if (err instanceof InternalError) {
    return res.status(401).json({
      error: err.code
    })
  } else next(err)

  

} satisfies ErrorRequestHandler)



app.use(function defaultErrorHandler(_, __, res, ___) {
  res.status(500).json({
    error: "INTERNAL_SERVER_ERROR"
  })
} satisfies ErrorRequestHandler)