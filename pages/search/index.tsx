//external modules
import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

//styles
import styles from './Search.module.css'

//internal files
import Product from '../../database/controllers/product'
import { DisplayableProductInterface } from '../../src/interfaces'
import Header from '../../src/components/Header'
import ProductCard from '../../src/components/ProductCard'

interface Props {
  products?: {length: number, products: Array<DisplayableProductInterface>, success: boolean},
  searchedTerm: string
}

const ProductDetailsBox: NextPage<Props> = ({ products, searchedTerm }) => {
  const router = useRouter();

  return(
    <div className="main-container">
      <Header />

      <h2>You searched for: {searchedTerm}</h2>
      <div className="products-container">
        { products && products.products &&
          // @ts-ignore
          products.products.map(prod => {
            return (
              <ProductCard product={prod} key={prod.id} ></ProductCard>
            )
        })}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context)  => {
  var products: {
      length: number,
      products: DisplayableProductInterface[],
    }

    // @ts-ignore
    var searchQuery: string = context.query['query'] || '';
    var products = await Product.findProducts(searchQuery);

  return { 
    props: {
      products,
      searchedTerm: context.query['query'],
    }  
  }
}

export default ProductDetailsBox;

