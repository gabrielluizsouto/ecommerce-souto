//external modules
import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

//styles
//import styles from '../styles/Home.module.css'

//internal files
import Product from '../database/controllers/product'
import { DisplayableProductInterface } from '../src/interfaces'
import Header from '../src/components/Header'
import ProductCard from '../src/components/ProductCard'
import Hero from '../src/components/Hero'

interface Props {
  products?: {length: number, products: Array<DisplayableProductInterface>, success: boolean};
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div className="main-container">
      {console.log('###', products)}
      <div className="search-bar-container">

      </div>

      <Header />
      <Hero />

      <div className="products-container">
        { products && products.products &&
          // @ts-ignore
          products.products.map(prod => {
            return (
              <ProductCard product={prod} key={prod.id} ></ProductCard>
            )
        })}
      </div>
      <div className="footer-container">

      </div>
      <div className="barra de busca">

      </div>



    </div>
  )
}

export const getStaticProps: GetStaticProps = async ()  =>  {
  var products: {length: number, products: Array<DisplayableProductInterface>, success: boolean};

  products = await Product.getProducts();

  return { 
    props: {
      products
    }  
  }
}

export default Home
