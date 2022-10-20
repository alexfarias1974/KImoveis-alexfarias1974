import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import isAdmValidatorMiddleware from "../middlewares/isAdmValidator.middleware";

const propertyRoutes = Router();
propertyRoutes.post("", getAuthMiddleware, isAdmValidatorMiddleware, createPropertyController);
propertyRoutes.get("", listPropertiesController);

export default propertyRoutes;