import Joi from 'joi';
import { SortByBasic, SortDirection } from '../../../common/constant';

export const CreateResource = Joi.object({
  body: {
    name: Joi.string().required(),
  },
}).unknown(true);

export const FindManyResource = Joi.object({
  query: {
    id: Joi.string().uuid().optional(),
    name: Joi.string().trim().optional(),
    code: Joi.string().trim().optional(),
    sortBy: Joi.string()
      .valid(...Object.values(SortByBasic))
      .optional(),
    sortDirection: Joi.string()
      .valid(...Object.values(SortDirection))
      .optional(),
    limit: Joi.number().integer().min(1).optional(),
    page: Joi.number().integer().min(1).optional(),
  },
}).unknown(true);

export const ResourceId = Joi.object({
  params: {
    id: Joi.string().uuid().required(),
  },
}).unknown(true);

export const UpdateResource = Joi.object({
  params: {
    id: Joi.string().uuid().required(),
  },
  body: {
    name: Joi.string().required(),
  },
}).unknown(true);
