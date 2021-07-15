import { NextFunction, Request, Response } from 'express';
function reqValidator(schema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const { params, query, body } = schema;
		let error: string;

		if (body) error = body.validate(req.body).error;
		if (query) error = query.validate(req.query).error;
		if (params) error = params.validate(req.params).error;

		if (error) return next(error);
		next();
	}
}
export const requestValidator =  reqValidator;