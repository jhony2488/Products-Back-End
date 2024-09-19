import { Request, Response } from 'express';
import { ProductRepository } from '../../../repositories/Products';
import { PropsProducts } from '../../../interfaces/products';

async function DeleteProducts(req: Request, res: Response) {
  const { id } = req.params;

  const getId = typeof id === 'string' ? parseInt(id) : id;

  const Product = new ProductRepository();

  try {
    let result = [];

    await Product.findById(parseInt(String(id), 10)).then((products: PropsProducts[]) => {
      result = products;
    });

    if (!result) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await Product.delete(getId);

    return res.json({
      message: 'Produto deletado com sucesso',
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export default DeleteProducts;
