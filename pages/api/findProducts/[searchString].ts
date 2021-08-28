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
    var { searchString } = req.query
    var products = await Product.findProducts(searchString.toString());

    // @ts-ignore
    res.status(200).json(products);
  } catch(err) {
    throw err;
  }
}
