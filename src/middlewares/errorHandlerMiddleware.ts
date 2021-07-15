import { NextFunction, Request, Response } from 'express';
import HttpException from './httpException';
const errorHandler = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
	
    interface ErrorHandler {
        status: number,
        message: string
    }

    const error: ErrorHandler = {
		status: err.status || 500,
		message: err.message || 'Internal server error',
	};

	res.status(error.status).json(error);
};

export default errorHandler;
