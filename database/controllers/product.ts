import dbConnect from '../dbConnect'
import ProductModel from '../models/product'

export const getProducts = async () => {
    await dbConnect()
    
    /* find all the data in our database */
    const result = await ProductModel.find({});

    const products = result.map((doc) => {
      const product = doc.toObject()
      product._id = null
      product.__v = null
      return product
    })
    
    return { products: products }
}
