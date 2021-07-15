import { avaliableService } from "../services";
import { RestError } from "../utils";
import { NextFunction, Request, Response } from "express";

async function findAvaliable(req: Request, res: Response, next: NextFunction) {
	try {
		const { id } = req.params;
		const avaliable = await avaliableService.findAvaliable(id);
		res.json(avaliable);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function findAvaliables(req: Request, res: Response, next: NextFunction) {
	try {
		const avaliable = await avaliableService.findAvaliables();
		res.json(avaliable);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function findAvaliableTimeSlot(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const ParamsDates = {
			dateStart: req.params["dateStart"],
			dateEnd: req.params["dateEnd"],
			hourStart: req.params["hourStart"],
			hourEnd: req.params["hourEnd"],
		};
		const avaliables = await avaliableService.findAvaliableTimeSlot(
			ParamsDates
		);

		res.json(avaliables);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function createAvaliable(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const body = req.body;
		const avaliable = await avaliableService.createAvaliable(body);
		res.status(201).json(avaliable);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function updateAvaliable(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const body = req.body;
		console.log(body);
		const { id } = req.params;
		const avaliable = await avaliableService.updateAvaliable(id, body);
		res.json(avaliable);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function deleteAvaliable(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { id } = req.params;
		await avaliableService.deleteAvaliable(id);
		res.status(204).json({});
	} catch (error) {
		next(new RestError(500, error));
	}
}

export default {
	findAvaliable,
	findAvaliables,
	findAvaliableTimeSlot,
	createAvaliable,
	updateAvaliable,
	deleteAvaliable,
};
