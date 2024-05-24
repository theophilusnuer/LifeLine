import { Router } from "express";
import { getUser, login, logout, register, updateUser } from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/authenticate.js";

//create users router
const usersRouter = Router();

//define routes
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/logout", verifyToken, logout );
usersRouter.get("/me", verifyToken, getUser);
usersRouter.patch("/:id", verifyToken, updateUser)

export default usersRouter;
