import { Router } from "express";
import createUserController from "./controllers/createUser.controller";
import listUsersController from "./controllers/listUsers.controller";
import loginUserController from "./controllers/loginUser.controller";
import softDeleteUserController from "./controllers/softDeleteUser.controller";
import updateUserController from "./controllers/updateUser.controller";
import getAuthMiddleware from "./middlewares/getAuth.middleware";
import isAdmValidatorMiddleware from "./middlewares/isAdmValidator.middleware";
import isIdValidatorMiddleware from "./middlewares/isIdValidator.middleware";
import validationBodyPatchMiddleware from "./middlewares/validationBodyPatch.middleware";

const routes = Router();

routes.post("/users", createUserController);
routes.get("/users", getAuthMiddleware, isAdmValidatorMiddleware, listUsersController);
routes.post("/login", loginUserController);
routes.delete("/users/:id", getAuthMiddleware, isAdmValidatorMiddleware, isIdValidatorMiddleware, softDeleteUserController);
routes.patch("/users/:id", getAuthMiddleware, isAdmValidatorMiddleware, validationBodyPatchMiddleware, updateUserController);

export default routes;