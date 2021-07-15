import { Request, Response } from "express";
export const notFound = (req: Request, res: Response) => {
    res.status(404).json({
        message: `${req.path} does not exist`,
    });
};

export const notFoundMiddleware = notFound;