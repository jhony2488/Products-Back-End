import express from 'express';

import { authentication } from './app/middlewares';

import DefaultControllersUsers from './app/controllers/DefaultControllers';
import { DeleteProducts, GetProducts, SetProducts, UpdateProducts } from './app/controllers/Products';

const router = express.Router();

//default
router.get('/', authentication, DefaultControllersUsers);

//products
router.get('/products', authentication, GetProducts);
router.post('/products', authentication, SetProducts);
router.put('/products/:id', authentication, UpdateProducts);
router.delete('/products/:id', authentication, DeleteProducts);

export default router;
