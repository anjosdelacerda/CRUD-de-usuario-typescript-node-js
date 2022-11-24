import { Router } from "express";

const routes = Router();

import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import listOneUserController from "../controllers/users/listOneUser.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import updateUserController from "../controllers/users/updateUser.controller";

routes.get("/users", listUsersController);
routes.post("/users", createUserController);
routes.get("/users/:id", listOneUserController);
routes.delete("/users/:id", userDeleteController);
routes.patch("/users/:id", updateUserController);

export default routes;
