import { userService } from "../services";
import { RestError } from "../utils";

async function findUser(req, res, next) {
	try {
		const { id } = req.params;
		const user = await userService.findUser(id);
		res.json(user);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function findUsers(req, res, next) {
	try {
		const user = await userService.findUsers();
		res.json(user);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function createUser(req, res, next) {
	try {
		const body = req.body;
		const user = await userService.createUser(body);
		res.status(201).json(user);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function updateUser(req, res, next) {
	try {
		const body = req.body;
		console.log(body);
		const { id } = req.params;
		const user = await userService.updateUser(id, body);
		res.json(user);
	} catch (error) {
		next(new RestError(404, error));
	}
}

async function deleteUser(req, res, next) {
	try {
		const { id } = req.params;
		userService.deleteUser(id);
		res.status(204).json("User has been deleted successfull");
	} catch (error) {
		next(new RestError(404, error));
	}
}

export default {
	findUser,
	findUsers,
	createUser,
	updateUser,
	deleteUser,
};
