import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listCategoryPropertiesService from "../../services/categories/listCategoryProperties.service";

const listCategoryPropertiesController = async (req: Request, res: Response) => {
    const propertyId = req.params.id
    const categories = await listCategoryPropertiesService(propertyId);
    return res.json(instanceToPlain(categories));
}

export default listCategoryPropertiesController;