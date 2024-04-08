import { SortDirection } from 'typeorm';
import { SortByBasic } from '../../../common/constant';

export interface IFindManyResource {
  id?: string;
  name?: string;
  code?: string;
  sortBy?: SortByBasic;
  sortDirection?: SortDirection;
  limit?: number;
  page?: number;
}

export interface IUpdateResource {
  id: string;
  updateData: {
    name?: string;
  };
}
