import { FindOptionsWhere } from 'typeorm';
import { Product } from '../entities/Products';
import { PropsProducts } from './products';

interface IProductsRepository {
  save(data: PropsProducts): Promise<Product>;
  update(id: number, data: PropsProducts): Promise<Product>;
  findById(id: number): Promise<Product | undefined>;
  findByQuery(query: FindOptionsWhere<Product> | FindOptionsWhere<Product>[]): Promise<Product | undefined>;
  findByQueryOne(query: FindOptionsWhere<Product> | FindOptionsWhere<Product>[]): Promise<Product | undefined>;
  find(): Promise<Product | undefined>;
  delete(id: number): Promise<null>;
}

export default IProductsRepository;
