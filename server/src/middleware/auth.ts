import type { NextFunction, Request, Response } from "express";
import { auth as better_auth } from "../lib/auth";
import type { JWTPayload } from "better-auth";

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session = await better_auth.api.getSession({
      headers: req.headers as any,
    });
    
    if (!session) {
      return res.status(400).json({
        success: false,
        message: "You are not authorized",
      });
    }
    if (!session.user.emailVerified) {
      return res.status(400).json({
        success: false,
        message: "Email verify is required, Please verify your email",
      });
    }
    req.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      role: session.user.role,
      emailVerified: session.user.emailVerified,
    };
    if (roles.length && !roles.includes(req.user.role as string)) {
      return res.status(400).json({
        success: false,
        message: "You have no access!",
      });
    }
    // console.log(req.user);
    next();
  };
};
