import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedules.controller";
import listSchedulesInPropertyController from "../controllers/schedules/listSchedulesInProperty.controller";
import getAuthMiddleware from "../middlewares/getAuth.middleware";
import isAdmValidatorMiddleware from "../middlewares/isAdmValidator.middleware";

const scheduleRoutes = Router();

scheduleRoutes.post("", createScheduleController);
scheduleRoutes.get("/properties/:id", getAuthMiddleware, isAdmValidatorMiddleware, listSchedulesInPropertyController);

export default scheduleRoutes;
