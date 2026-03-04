import { type LoanRequest, type ContactForm } from "@shared/schema";

export interface IStorage {
  // Dummy interface to satisfy template requirements
  getDummy(): Promise<void>;
}

export class MemStorage implements IStorage {
  async getDummy(): Promise<void> {
    return;
  }
}

export const storage = new MemStorage();
