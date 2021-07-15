import { Router } from "express";
import { requestValidator } from "../middlewares";
import { userController } from "../controllers";
import { userSchema } from './schema';

const userRouter = Router();

userRouter
	.route("/")
	.get(userController.findUsers)
	.post(userController.createUser);

userRouter
	.route("/:id")
	.get(requestValidator(userSchema.getUserSchema), userController.findUser)
	.put(userController.updateUser)
	.delete(userController.deleteUser);

export default userRouter;
