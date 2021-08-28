import mongoose from 'mongoose'
import { ProductInterface } from '../../src/interfaces'


export const ProductSchema = new mongoose.Schema<ProductInterface>({
    _id: { type: mongoose.Schema.Types.ObjectId },
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    stock: { type: Number },
    rating: { type: Number},
    variants: [String],
    category: { type: String }
});

const ProductModel: mongoose.Model<ProductInterface, {}, {}> = mongoose.models.Product || mongoose.model<ProductInterface>('Product', ProductSchema);
//const ProductModel: mongoose.Model<ProductInterface, {}, {}> = mongoose.model<ProductInterface>('Product', ProductSchema);

export default ProductModel;

