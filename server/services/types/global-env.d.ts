import {Request} from "express";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      mongodb_pass: string;
    }
  }
}

declare namespace Express {
  export interface Request {
    // user: typeof User;
  }
}

export {};
