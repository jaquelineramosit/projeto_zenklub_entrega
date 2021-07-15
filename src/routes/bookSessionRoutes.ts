import { Router } from "express";
import { bookSessionController } from "../controllers";

const bookSessionRouter = Router();

bookSessionRouter
	.route("/")
	.get(bookSessionController.findBookSessions)
	.post(bookSessionController.createBookSession);

bookSessionRouter
	.route("/:id")
	.get(bookSessionController.findBookSession)
	.put(bookSessionController.updateBookSession)
	.delete(bookSessionController.deleteBookSession);

export default bookSessionRouter;
