// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../database/controllers/product'

type Data = {
  products: Array<Object>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    var products = await Product.getProducts();

    // @ts-ignore
    res.status(200).json(products);
  } catch(err) {
    throw err;
  }
}
