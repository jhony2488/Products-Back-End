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
    const reservation = await new Product();

    reservation.produto = data.produto;
    reservation.categoria = data.categoria;
    reservation.preço = data.preço;
    reservation.quantidade = data.quantidade;

    await this.repository.save(reservation);
    return reservation;
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
    const reservation = await this.repository.findOneBy({ id });

    if (reservation == null || !reservation) {
      return null;
    }

    reservation.produto = data.produto;
    reservation.categoria = data.categoria;
    reservation.preço = data.preço;
    reservation.quantidade = data.quantidade;

    await this.repository.save(reservation);
    return reservation;
  }
  async delete(id: number): Promise<any> {
    const reservation = await this.repository.findOneBy({ id });

    if (reservation == null || !reservation) {
      return null;
    }

    return this.repository.remove(reservation);
  }
}
