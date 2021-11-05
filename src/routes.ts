import { Router, request, response, Request, Response } from 'express';
import {
  deleteProduct,
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
} from './controller/ProductController';

const routes = Router();

routes.get('/home', (request: Request, response: Response) => {
  return response.json({ message: 'Hello Turma!' });
});

routes.get('/products', getProducts);
routes.post('/products', saveProduct);
routes.get('/products/:id', getProduct);
routes.put('/products/:id', updateProduct);
routes.delete('/products/:id', deleteProduct);

export default routes;
