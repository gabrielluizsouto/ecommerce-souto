import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import dbConnect from '../database/dbConnect'
import {getProducts} from '../database/controllers/product'
import ProductModel from '../database/models/product'

// @ts-ignore
const Home: NextPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Bem vindo ao Ecommerce</h1>

      <main className={styles.main}>
          { products && products.products &&
          // @ts-ignore
          products.products.map(prod => {
            return (
              <div key={prod.name}>
                <p>{prod.name} | <strong>{prod.price}</strong></p>
              </div>
            )
          })}
      </main>
    </div>
  )
}

//@ts-ignore
export async function getStaticProps() {
  await dbConnect();    

  var products = {}
  try{
    products = await getProducts();
  } catch(e){}
  
  return { props: { products: products } }
}

export default Home
