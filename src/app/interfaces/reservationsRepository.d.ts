import { Product } from '../entities/Products';
import { PropsProducts, PropsProductsQuery } from './products';

interface IProductsRepository {
  save(data: PropsProducts): Promise<Product>;
  update(id: number, data: PropsProducts): Promise<Product>;
  findById(id: number): Promise<Product | undefined>;
  findByQuery(query: PropsProductsQuery): Promise<Product | undefined>;
  find(): Promise<Product | undefined>;
  delete(id: number): Promise<null>;
}

export default IProductsRepository;
