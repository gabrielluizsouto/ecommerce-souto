import dbConnect from '../dbConnect'
import ProductModel from '../models/product'

const getProducts = async (): Promise<Object> => {
  await dbConnect();    
  
  const result = await ProductModel.find({});
  
  const products = result.map((doc) => {
    const product = doc.toObject()
    product._id = null
    product.__v = null
    
    return product
  });
  
  return { products: products }
}

const Product = {
  getProducts,
}

export default Product;
