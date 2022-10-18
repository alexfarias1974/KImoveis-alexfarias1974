import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import loginUserService from "../services/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
    try {
        const data: IUserLogin = req.body;
        const token = await loginUserService(data);
        return res.json({token});
        
    } catch (error) {
        if(error instanceof Error) {
            return res.status(403).json({
                message: error.message
            })
        }
    }
};

export default loginUserController;