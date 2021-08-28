import mongoose from 'mongoose'

export interface ProductInterface extends mongoose.Document{
    _id: mongoose.Schema.Types.ObjectId,
    id: number,
    name: string,
    price: number,
    previousPrice: number,
    image: string ,
    stock: number ,
    rating: number,
    variants: Array<string>,
    category: string
}

export interface DisplayableProductInterface {
    id: number,
    name: string,
    price: number,
    previousPrice: number,
    image: string ,
    stock: number ,
    rating: number,
    variants: Array<string>,
    category: string
  }