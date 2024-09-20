import { FindOptionsWhere, Repository } from 'typeorm';
import { Product } from '../../entities/Products';
import dataSource from '../../../database/typeorm';
import IProductRepository from '../../interfaces/productsRepository';
import { PropsProducts } from '../../interfaces/products';

export class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = dataSource.getRepository(Product);
  }

  async save(data: PropsProducts) {
    const product = await new Product();

    product.produto = data.produto;
    product.categoria = data.categoria;
    product.preço = data.preço;
    product.quantidade = data.quantidade;
    product.created_at = new Date();

    await this.repository.save(product);
    return product;
  }
  async find(): Promise<any> {
    const result = this.repository.find();
    return !result || result == null ? [] : result;
  }
  async findById(id: number): Promise<any> {
    const result = this.repository.findOneBy({ id });
    return !result || result == null ? [] : result;
  }
  async findByQueryOne(query: FindOptionsWhere<Product> | FindOptionsWhere<Product>[]): Promise<any> {
    const result = this.repository.findOneBy(query);
    return !result || result == null ? [] : result;
  }
  async findByQuery(query: FindOptionsWhere<Product> | FindOptionsWhere<Product>[]): Promise<any> {
    const result = this.repository.findBy(query);
    return !result || result == null ? [] : result;
  }
  async update(id: number, data: PropsProducts): Promise<any> {
    const product = await this.repository.findOneBy({ id });

    if (product == null || !product) {
      return null;
    }

    product.produto = data.produto;
    product.categoria = data.categoria;
    product.preço = data.preço;
    product.quantidade = data.quantidade;

    await this.repository.save(product);
    return product;
  }
  async delete(id: number): Promise<any> {
    const product = await this.repository.findOneBy({ id });

    if (product == null || !product) {
      return null;
    }

    return this.repository.remove(product);
  }
}
