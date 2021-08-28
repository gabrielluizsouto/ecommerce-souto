// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../database/controllers/product'
import { DisplayableProductInterface } from '../../../src/interfaces'

type Data = {
  product: DisplayableProductInterface
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    var { id } = req.query
    var product = await Product.getProduct(Number(id));

    // @ts-ignore
    res.status(200).json(product);
  } catch(err) {
    throw err;
  }
}
