// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getProducts} from '../../database/controllers/product'

type Data = {
  products: Array<Object>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    var products = await getProducts();

    // @ts-ignore
    res.status(200).json({prop: products.products});
  } catch(err) {
    throw err;
  }
}
