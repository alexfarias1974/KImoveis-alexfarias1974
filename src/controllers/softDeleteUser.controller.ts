import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import softDeleteUSerService from "../services/softDeleteUser.service";

const softDeleteUserController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const softDeletedUser = await softDeleteUSerService(id);
        return res.status(204).json({
            message: "User Deleted!"
        });
        
    }
    catch (error) {
        if(error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}
export default softDeleteUserController;