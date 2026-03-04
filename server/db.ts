import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

// Even though this is a 100% frontend project, the template expects
// a valid backend setup to start successfully without crashing.
// We provide a dummy implementation that won't be used since
// no backend calls will be made from the frontend.

export const db = {} as any; // Dummy DB to satisfy imports
export const pool = {} as any;
