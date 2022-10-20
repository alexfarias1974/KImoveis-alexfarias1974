import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listCategoriesService from "../../services/categories/listCategories.service";

const listCategoriesController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService();
    return res.json(instanceToPlain(categories));
}

export default listCategoriesController;