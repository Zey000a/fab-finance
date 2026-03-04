import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // No real routes needed as this is a 100% frontend project per user requirements.
  // We just satisfy the template requirement by returning the httpServer.
  
  app.post(api.dummy.simulate.path, (req, res) => {
    res.status(200).json({ status: "dummy backend is working but shouldn't be called" });
  });

  return httpServer;
}
