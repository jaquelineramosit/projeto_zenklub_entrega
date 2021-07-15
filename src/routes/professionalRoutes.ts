import { Router } from "express";
//import { requestValidator } from '../middlewares';
import { professionalController } from "../controllers";

const professionalRouter = Router();

professionalRouter
	.route("/")
	.get(professionalController.getProfessionals)
	.post(professionalController.createProfessional);

professionalRouter
	.route("/:id")
	.get(professionalController.getProfessional)
	.put(professionalController.updateProfessional)
	.delete(professionalController.deleteProfessional);

export default professionalRouter;
