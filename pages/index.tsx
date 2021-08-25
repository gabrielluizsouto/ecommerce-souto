import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Product from '../database/controllers/product'

// @ts-ignore
const Home: NextPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1> Bem vindo ao Ecommerce</h1>

      <main className={styles.main}>
          { products && products.products &&
          // @ts-ignore
          products.products.map(prod => {
            return (
              <div key={prod.name}>
                <p>{prod.id} | {prod.name} | <strong>{prod.price}</strong></p>
              </div>
            )
          })}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  var products = {}

  try{
    products = await Product.getProducts();
  } catch(e){}
  
  return { props: { products } }
}

export default Home
