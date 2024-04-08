import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const catchError =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      next(error);
    });
  };

export const handleException = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = +err.statusCode || 500;

  const error = {
    message: err.message || 'Internal Server Error',
  };
  console.log(`Error: `, error);

  res.status(statusCode).json(error);
};
