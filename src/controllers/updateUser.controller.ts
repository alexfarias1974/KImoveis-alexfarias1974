import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import { User } from "../entities/user.entity";
import updateUSerService from "../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
    try {
        const user: IUserUpdate = req.body;
        const id: string = req.params.id;
        const updatedUser = await updateUSerService(user, id);
        if(updatedUser instanceof User) {
            return res.json(updatedUser);
        }
        return res.status(updatedUser[1] as number).json({
            message: updatedUser[0]
        })
    } catch (error) {
        if(error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export default updateUserController;