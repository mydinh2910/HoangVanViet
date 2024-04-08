import * as crypto from 'crypto';
import { dataSource } from '../../configs/data-source';
import { Resource } from './model/resource.entity';
import { IFindManyResource, IUpdateResource } from './model/resource.interface';
import { SortByBasic, SortDirection } from '../../common/constant';
import { ApiError } from '../../middleware/errorHandler';

export default class ResourceService {
  private readonly resourceRepository;

  constructor() {
    this.resourceRepository = dataSource.getRepository(Resource);
  }

  private generateRandomString(length: number) {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
  }

  async createResource(name: string) {
    return this.resourceRepository.save({
      name,
      code: this.generateRandomString(8),
    });
  }

  async deleteResource(id: string) {
    await this.resourceRepository.delete(id);
  }

  async findManyResource(params: IFindManyResource) {
    const {
      sortBy = SortByBasic.CREATED_AT,
      sortDirection = SortDirection.DESC,
      limit = 10,
      page = 1,
      ...query
    } = params;

    const [resources, total] = await this.resourceRepository.findAndCount({
      where: query,
      order: { [sortBy]: sortDirection },
      take: Number(limit),
      skip: (Number(page) - 1) * limit,
    });

    return {
      total,
      records: resources,
    };
  }

  async getResource(id: string) {
    const resource = await this.resourceRepository.findOne({
      where: { id },
    });

    return {
      data: resource,
    };
  }

  async updateResource({ id, updateData }: IUpdateResource) {
    const existsResource = await this.resourceRepository.existsBy({ id });

    if (!existsResource) {
      throw new ApiError('Resource not found', 404);
    }

    await this.resourceRepository.update(id, updateData);
  }
}
