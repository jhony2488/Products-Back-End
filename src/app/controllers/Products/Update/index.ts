import { Request, Response } from 'express';
import { ProductRepository } from '../../../repositories/Products';
import { PropsProducts } from '../../../interfaces/products';

async function UpdateProducts(req: Request, res: Response) {
  const { id } = req.params;
  const body: PropsProducts = req.body;

  const Product = new ProductRepository();

  const getId = typeof id === 'string' ? parseInt(id) : id;

  try {
    let result = [];

    await Product.findById(getId).then((products: PropsProducts[]) => {
      result = products;
    });

    if (result.length == 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await Product.update(getId, body);

    return res.json({
      message: 'Produto atualizado com sucesso',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default UpdateProducts;
