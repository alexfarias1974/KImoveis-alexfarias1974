import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import softDeleteUSerService from "../../services/users/softDeleteUser.service";

const softDeleteUserController = async (req: Request, res: Response) => {

    const id: string = req.params.id;
    const softDeletedUser = await softDeleteUSerService(id);
    return res.status(204).json({
        message: "User Deleted!"
    });
        
}
export default softDeleteUserController;