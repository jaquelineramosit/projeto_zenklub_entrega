import { professionalService } from "../services/";
import { RestError } from "../utils";

async function getProfessional(req, res, next) {
	try {
		const { id } = req.params;
		const professional = await professionalService.findProfessional(id);
		res.json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function getProfessionals(req, res, next) {
	try {
		const professional = await professionalService.findProfessionals();
		res.json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function createProfessional(req, res, next) {
	try {
		const body = req.body;
		const professional = await professionalService.createProfessional(body);
		res.status(201).json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function updateProfessional(req, res, next) {
	try {
		const body = req.body;
		console.log(body);
		const { id } = req.params;
		const professional = await professionalService.updateProfessional(id, body);
		res.json(professional);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function deleteProfessional(req, res, next) {
	try {
		const { id } = req.params;
		await professionalService.deleteProfessional(id);
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
