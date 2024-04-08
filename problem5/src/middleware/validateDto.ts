import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateDto =
  (schemaDto: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error, value } = schemaDto.validate(req, { abortEarly: false });

      if (error) {
        return res
          .status(400)
          .json({ name: error.name, message: error.message });
      }

      req.params = value.params;
      req.query = value.query;
      req.body = value.body;
      next();
    } catch (error: any) {
      const statusCode = +error.statusCode || 500;
      const message = error.message || 'Internal Server Error';
      const name = error.name;
      res.status(statusCode).json({ name, message });
    }
  };
