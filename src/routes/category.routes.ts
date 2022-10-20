import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import isAdmValidatorMiddleware from "../middlewares/isAdmValidator.middleware";

const categoryRoutes = Router();

categoryRoutes.post("", getAuthMiddleware, isAdmValidatorMiddleware, createCategoryController)
categoryRoutes.get("", listCategoriesController)

export default categoryRoutes;
