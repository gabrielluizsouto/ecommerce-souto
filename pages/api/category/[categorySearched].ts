// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../database/controllers/product'
import { DisplayableProductInterface } from '../../../src/interfaces'

type Data = {
  product: DisplayableProductInterface
} | {
    message: string,
    error: Error
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    var { categorySearched } = req.query
    var products = await Product.getProductsByCategory(categorySearched.toString());

    // @ts-ignore
    res.status(200).json(products);
  } catch(err) {
    res.status(500).json({
        message: "erro na busca por categoria",
        error: err
    });
  }
}
