import { Request, Response } from 'express';
import { ProductRepository } from '../../../repositories/Products';
import { PropsProducts } from '../../../interfaces/products';

async function GetProducts(req: Request, res: Response) {
  const query = req.query;
  const Product = new ProductRepository();

  try {
    let result = [];

    if (query) {
      await Product.findByQuery(query).then((products: PropsProducts[]) => {
        result = products;
      });
    } else {
      await Product.find().then((products: PropsProducts[]) => {
        result = products;
      });
    }

    if (result.length == 0) {
      return res.status(404).json({ message: 'Nenhum produto foi encontrado' });
    }

    return res.json({
      result,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export default GetProducts;
