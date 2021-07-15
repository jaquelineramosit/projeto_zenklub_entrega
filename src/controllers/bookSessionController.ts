import { bookSessionService } from "../services";
import { RestError } from "../utils";

async function findBookSession(req, res, next) {
	try {
		const { id } = req.params;
		const bookSession = await bookSessionService.findBookSession(id);
		res.json(bookSession);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function findBookSessions(req, res, next) {
	try {
		const bookSession = await bookSessionService.findBookSessions();
		res.json(bookSession);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function createBookSession(req, res, next) {
	try {
		const body = req.body;
		const bookSession = await bookSessionService.createBookSession(body);
		res.status(201).json(bookSession);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function updateBookSession(req, res, next) {
	try {
		const body = req.body;
		console.log(body);
		const { id } = req.params;
		const bookSession = await bookSessionService.updateBookSession(id, body);
		res.json(bookSession);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function deleteBookSession(req, res, next) {
	try {
		const { id } = req.params;
		await bookSessionService.deleteBookSession(id);
		res.status(204).json({});
	} catch (error) {
		next(new RestError(500, error));
	}
}

export default {
	findBookSession,
	findBookSessions,
	createBookSession,
	updateBookSession,
	deleteBookSession,
};
