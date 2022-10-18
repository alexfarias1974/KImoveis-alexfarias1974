import { Router } from "express";
import loginUserController from "../controllers/loginUser.controller";

const sessionRoutes = Router();
sessionRoutes.post("", loginUserController);

export default sessionRoutes;