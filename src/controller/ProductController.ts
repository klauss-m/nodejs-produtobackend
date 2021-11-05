import { getRepository } from 'typeorm';
import { Products } from '../entity/Products';
import { Request, Response } from 'express';

export async function getProducts(request: Request, response: Response) {
  try {
    const products = await getRepository(Products).find();
    return response.json(products);
  } catch (e) {
    response.status(500).json({ error: e.message });
  }
}

export async function saveProduct(request: Request, response: Response) {
  try {
    const product = await getRepository(Products).save(request.body);
    return response.json(product);
  } catch (e) {
    console.log(e);
  }
}

export async function getProduct(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const product = await getRepository(Products).findOne(id);
    return response.json(product);
  } catch (e) {
    console.log(e);
  }
}

export async function updateProduct(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const product = await getRepository(Products).update(id, request.body);

    if (product.affected == 1) {
      const productUpdated = await getRepository(Products).findOne(id);
      return response.json(productUpdated);
    } else {
      return response.status(404).json({ message: 'Produto não encontrado!' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function deleteProduct(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const product = await getRepository(Products).delete(id);

    if (product.affected == 1) {
      return response
        .status(200)
        .json({ message: 'Produto excluído com sucesso!' });
    } else {
      return response.status(404).json({ message: 'Produto não encontrado!' });
    }
  } catch (e) {
    console.log(e);
  }
}
