import express, { ErrorRequestHandler } from "express";

import cookieParser from "cookie-parser";

import { adminMiddleware } from "./api/auth/adminWiddleware.ts";
import { loginHandler } from "./api/auth/api.ts";
import { authMiddleware } from "./api/auth/authMiddleware.ts";
import { InternalError } from "./errorDict.ts";
import { app } from "./initApp.ts";
import { partnerRouter } from "./api/partner/api.ts";
import { abonentRouter } from "./api/abonent/api.ts";

export {app}

app.use(express.json())
app.use(cookieParser())
app.use(...loginHandler)
app.use(authMiddleware)
app.use("/sec", adminMiddleware)
app.use(partnerRouter)
app.use(abonentRouter)

//error handlers
app.use(function errorLogger(err, _, res, next) {
  console.log(`${new Date().toISOString()}: Err --> ${err.toString?.() || err}`)
  next(err)
} satisfies ErrorRequestHandler)

app.use(function internalErrorHandler(err, _, res, next) {

  if (err instanceof InternalError) {
    return res.json({
      error: err.code
    })
  } else next(err)

  

} satisfies ErrorRequestHandler)

app.use(function defaultErrorHandler(_, __, res, ___) {
  res.json({
    error: "INTERNAL_SERVER_ERROR"
  })
} satisfies ErrorRequestHandler)