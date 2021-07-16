import { professionalService } from "../services/";
import { RestError } from "../utils";
import { NextFunction, Request, Response } from "express";

async function getProfessional(
	req: Request, 
	res: Response, 
	next: NextFunction) {
	try {
		const { id } = req.params;
		const professional = await professionalService.findProfessional(+id);
		res.json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function getProfessionals(
	req: Request, 
	res: Response, 
	next: NextFunction) {
	try {
		const professional = await professionalService.findProfessionals();
		res.json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function createProfessional(
	req: Request, 
	res: Response, 
	next: NextFunction) {
	try {
		const body = req.body;
		const professional = await professionalService.createProfessional(body);
		res.status(201).json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function updateProfessional(
	req: Request, 
	res: Response, 
	next: NextFunction) {
	try {
		const body = req.body;
		console.log(body);
		const { id } = req.params;
		const professional = await professionalService.updateProfessional(+id, body);
		res.json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function deleteProfessional(
	req: Request, 
	res: Response, 
	next: NextFunction) {
	try {
		const { id } = req.params;
		await professionalService.deleteProfessional(+id);
		res.status(204).json();
	} catch (error) {
		next(new RestError(404, error));
	}
}

export default {
	getProfessional,
	getProfessionals,
	createProfessional,
	updateProfessional,
	deleteProfessional,
};
