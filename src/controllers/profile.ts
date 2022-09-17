import { Request, Response } from "express";
import { BadRequest } from "../common/errors/BadRequest";

// import { Role } from "../../../../common/types/role";
// import { User } from "../../../../model/user";
// import jwt from "jsonwebtoken";

const getProfile = async (req: Request, res: Response) => {
  try {
    res.send("Secret Database Data. Only for Admin. Not for user");
    // const u
  } catch (error) {
    throw new BadRequest(
      (error as any).message ? (error as any).message : "Something bad"
    );
  }
};

export { getProfile as getProfileHandler };
