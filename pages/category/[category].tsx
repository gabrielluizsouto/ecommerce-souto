//external modules
import type { NextPage, GetServerSideProps } from 'next'


//styles
import styles from './Category.module.css'

//internal files
import Product from '../../database/controllers/product'
import { DisplayableProductInterface } from '../../src/interfaces'
import Header from '../../src/components/Header'
import ProductCard from '../../src/components/ProductCard'


interface Props {
  products?: {length: number, products: Array<DisplayableProductInterface>, success: boolean},
  category: string
}

const ProductCategoryBox: NextPage<Props> = ({ products, category }) => {
  return(
    <div className="main-container">
      <Header />

      <h2>You are in category: {category.toUpperCase()}</h2>
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
    length: number;
    products: DisplayableProductInterface[];
  }

  // @ts-ignore
  var { category } = context.params;
  var products = await Product.findProducts(category);

  return { 
    props: {
      products,
      category,
    }  
  }
}

export default ProductCategoryBox;
