import { DataSource } from 'typeorm';
import { Product } from '../app/entities/Products';

import { products1693428187268 } from './migrations/2024-09-19_10-39-00_create_products';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.BD_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Product],
  migrations: [products1693428187268],
});

export default dataSource;
