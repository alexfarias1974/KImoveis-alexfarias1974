import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const validationBodyPatchMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const bodyPatch = req.body;

    const keyArr = Object.keys(bodyPatch)
    
    if(keyArr.includes("isAdm") || keyArr.includes("isActive") || keyArr.includes("id")) {
        return res.status(401).json({
            message: "Invalid key!"
        })
    }

    return next();
};

export default validationBodyPatchMiddleware;