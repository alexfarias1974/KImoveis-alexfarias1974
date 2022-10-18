import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import { User } from "../entities/user.entity";
import updateUSerService from "../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {

    const user: IUserUpdate = req.body;
    const id: string = req.params.id;
    const updatedUser = await updateUSerService(user, id);
    return res.json(updatedUser);

}

export default updateUserController;