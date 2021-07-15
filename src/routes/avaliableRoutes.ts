import { Router } from "express";
import { avaliableController } from "../controllers";

const avaliableRouter = Router();

avaliableRouter
	.route("/")
	.get(avaliableController.findAvaliables)
	.post(avaliableController.createAvaliable);

avaliableRouter
	.route("/:id")
	.get(avaliableController.findAvaliable)
	.put(avaliableController.updateAvaliable)
	.delete(avaliableController.deleteAvaliable);

export default avaliableRouter;
