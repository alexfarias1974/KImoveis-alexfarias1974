import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listSchedulesInPropertyService from "../../services/schedules/listSchedulesInProperty.service";

const listSchedulesInPropertyController = async(req: Request, res: Response) => {
    const propertyId = req.params.id
    const schedulesProperty = await listSchedulesInPropertyService(propertyId)
    return res.json(schedulesProperty)
}

export default listSchedulesInPropertyController;