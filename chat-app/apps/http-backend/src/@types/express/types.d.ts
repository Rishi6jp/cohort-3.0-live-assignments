import { Request } from "express";

export interface AuthenticationRequest extends Request {
    userId?: string;
}