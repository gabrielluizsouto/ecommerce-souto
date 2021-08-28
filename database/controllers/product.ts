import dbConnect from '../dbConnect'
import ProductModel, { ProductSchema } from '../models/product'
import { DisplayableProductInterface, ProductInterface } from '../../src/interfaces'


const getProducts = async (): Promise<{length: number, products: Array<DisplayableProductInterface>, success: boolean}> => {
  var returnedObj: {length: number, products: Array<DisplayableProductInterface>, success: boolean}; 
  await dbConnect();    
  
  try{
    const result: Array<ProductInterface> = await ProductModel.find({});
    const products: Array<DisplayableProductInterface> = result.map((doc: DisplayableProductInterface) => {
      return {
        id: doc.id,
        name: doc.name,
        image: doc.image,
        stock: doc.stock,
        price: doc.price,
        previousPrice: doc.previousPrice,
        rating: doc.rating,
        category: doc.category,
        variants: doc.variants
      };
    });

    returnedObj = {
      length: result.length,
      products,
      success: true
    }
  } catch(e){
    returnedObj = {
      length: 0,
      products: [],
      success: false
    }
  }

  return returnedObj;
}

const getProduct = async (productId: number): Promise<DisplayableProductInterface> => {
  await dbConnect();

  const result: Array<ProductInterface> = await ProductModel.find({id: productId});

  const product = {
    id: result[0].id,
    name: result[0].name,
    image: result[0].image,
    stock: result[0].stock,
    price: result[0].price,
    previousPrice: result[0].previousPrice,
    rating: result[0].rating,
    category: result[0].category,
    variants: result[0].variants
  };

  return product;
}

const findProducts = async (searchString: string): Promise<{length: number, products: Array<DisplayableProductInterface>}> => {
  await dbConnect();

  const result: Array<ProductInterface> = await ProductModel.find({$or:[{name: new RegExp(searchString,'ig')},{category: RegExp(searchString,'ig')},{variants:  RegExp(searchString,'ig')}]});
  const products = result.map((doc: DisplayableProductInterface) => {
    return {
      id: doc.id,
      name: doc.name,
      image: doc.image,
      stock: doc.stock,
      price: doc.price,
      previousPrice: doc.previousPrice,
      rating: doc.rating,
      category: doc.category,
      variants: doc.variants
    }
  })

  return {length: result.length, products};
}

const getProductsByCategory = async (categorySearched: string): Promise<{length: number, products: Array<DisplayableProductInterface>, success: boolean, categorySearched: string}> => {
  var returnedObj: {length: number, products: Array<DisplayableProductInterface>, success: boolean, categorySearched: string}; 
  await dbConnect();    
  
  try{
    const result: Array<ProductInterface> = await ProductModel.find({category: new RegExp('^' + categorySearched + '$', 'ig')});
    const products: Array<DisplayableProductInterface> = result.map((doc: DisplayableProductInterface) => {
      return {
        id: doc.id,
        name: doc.name,
        image: doc.image,
        stock: doc.stock,
        price: doc.price,
        previousPrice: doc.previousPrice,
        rating: doc.rating,
        category: doc.category,
        variants: doc.variants
      };
    });

    returnedObj = {
      length: result.length,
      products,
      success: true,
      categorySearched
    }
  } catch(e){
    returnedObj = {
      length: 0,
      products: [],
      success: false,
      categorySearched
    }
  }

  return returnedObj;
}

const Product = {
  getProducts,
  getProduct,
  findProducts,
  getProductsByCategory,
}

export default Product;
