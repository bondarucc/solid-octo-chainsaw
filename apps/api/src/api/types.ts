import { RequestHandler } from "express";
import type { PrismaClient } from "../../generated/prisma/client.ts";

export type RouteHandler = [String, RequestHandler]

export type PrismaTrnClient = Omit<PrismaClient, "$on" | "$connect" | "$disconnect" | "$transaction" | "$extends">