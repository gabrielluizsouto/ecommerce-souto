import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    stock: { type: Number },
    rating: { type: Number},
    variants: [String]
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
