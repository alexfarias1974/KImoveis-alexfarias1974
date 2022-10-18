import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const isIdValidatorMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const idValidation = req.params.id;
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({
        id: idValidation
    })

    if (!findUser) {
        return res.status(404).json({
            message: "Id not found"
        })
    }
    return next();

}

export default isIdValidatorMiddleware;