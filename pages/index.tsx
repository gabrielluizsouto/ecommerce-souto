import type { NextPage } from 'next'
import Image from 'next/image'

import Product from '../database/controllers/product'
import { DisplayableProductInterface } from '../src/interfaces'

// @ts-ignore
const Home: NextPage = ({ products }) => {
  return (
    <div>
      <h1> Bem vindo ao Ecommerce</h1> {console.log(products)}
      <main>
          { products && products.products &&
          // @ts-ignore
          products.products.map(prod => {
            return (
              <div key={prod.name}>
                <p>{prod.id} | {prod.name} | <strong>{prod.price}</strong> | {prod.category}</p>
                <Image src={prod.image} alt={prod.name} width={100} height={100}/>
              </div>
            )
          })}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  var products: {length: number, products: Array<DisplayableProductInterface>, success: boolean};

  products = await Product.getProducts();

  return { 
    props: {
      products
    }  
  }
}

export default Home
