import {
    uniqueNamesGenerator,
    adjectives,
    colors,
    names
} from 'unique-names-generator';

import dbConnect from '../dbConnect'
import Product from '../models/product'

const createDump = (arrayLength = 100) => {

    let a = new Array(arrayLength);
    for (let i = 0; i < a.length; i++) {
        const minPrice = 1;
        const maxPrice = 2500;
        const randomStock = Math.floor(Math.random() * 50);
        const randomPrice = Math.random() * (+maxPrice - +minPrice) + +minPrice;
        const salePrice = !!Math.floor((Math.random() * 1000) % 2)
        ? randomPrice * (Math.floor(Math.random() * (50 - 10) + 10) / 100)
        : randomPrice;
        const randomRating = Math.random() * (5 - 1) + 1;
        const randomVariants = (quantity: number) => {
            let array = [];
            for (let index = 0; index < quantity; index++) {
                array[index] = uniqueNamesGenerator({dictionaries: [colors]});
            }
            return array;        
        };
        const randomCategory = () => {
            return ['TVs', 'Phones', 'Games', 'Computers', 'Sound systems'][Math.floor(Math.random() * 5)];
        }

        a[i] = {
            id: i,
            name: uniqueNamesGenerator({
                dictionaries: [names, adjectives],
                separator: ' '
            }),
            image: `https://picsum.photos/400?image=${Math.floor(
                Math.random() * 1000
            )}`,
            stock: randomStock,
            price: randomPrice.toFixed(2),
            rating: parseInt(randomRating.toFixed(0)),
            variants: randomVariants(Math.floor(Math.random() * 4)),
            category: randomCategory()
        };

    }

    //console.log('products', a)

    return a;
};

const connectToDB = async () => {
    await dbConnect();
    console.log('connected to DB')
}

const saveProductsInDB = async (products: Array<Object>) => {
    await Product.insertMany(products)
}

const run = async (QUANTITY: number) => {
    console.log('run')

    await connectToDB();
    var products = createDump(QUANTITY);
    await saveProductsInDB(products);
    
    return products;
}

export default run;