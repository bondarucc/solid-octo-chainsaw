import { RequestHandler } from "express";

export type RouteHandler = [String, RequestHandler]