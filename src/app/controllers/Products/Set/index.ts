import { Request, Response } from 'express';
import { ProductRepository } from '../../../repositories/Products';
import { PropsProducts } from '../../../interfaces/products';

async function SetProducts(req: Request, res: Response) {
  const body = req.body;

  const Product = new ProductRepository();

  try {
    let result = [];

    await Product.findByQuery(body.created_at ? body : { ...body, created_at: new Date() }).then(
      (products: PropsProducts[]) => {
        result = products;
      },
    );

    if (result.length > 0) {
      return res.status(400).json({ message: 'Produto já existe' });
    }

    await Product.save(body);

    return res.status(201).json({
      message: 'Produto criado com sucesso',
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export default SetProducts;
