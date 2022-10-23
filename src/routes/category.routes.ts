import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoryPropertiesController from "../controllers/categories/listCategoryProperties.controller";
import listCategoriesController from "../controllers/categories/listCategoryProperties.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import isAdmValidatorMiddleware from "../middlewares/isAdmValidator.middleware";

const categoryRoutes = Router();

categoryRoutes.post("", getAuthMiddleware, isAdmValidatorMiddleware, createCategoryController)
categoryRoutes.get("/:id/properties", listCategoryPropertiesController)
categoryRoutes.get("", listCategoriesController)

export default categoryRoutes;
