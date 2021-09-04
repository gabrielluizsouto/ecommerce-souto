//external modules
import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

//styles
import styles from './Product.module.css'

//internal files
import Product from '../../database/controllers/product'
import { DisplayableProductInterface } from '../../src/interfaces'
import Header from '../../src/components/Header'

interface Props {
  product: DisplayableProductInterface;
}

const ProductDetailsBox: NextPage<Props> = ({ product }) => {
  const router = useRouter();

  return (
    <div className="main-container">
      <Header />
      
      <div className="category-ontainer">
        <div className={styles.productsContainer}>
          <div key={product.name}>
            <div className={styles.nameAndIdContainer}>
              <div className={styles.productId}>{product.id}</div>
              <div className={styles.productName}>{product.name}</div>
            </div> 
            <div className={styles.productImage}>
              <Image src={product.image} alt={product.name} width={300} height={300}/>
            </div>
            <div className={styles.productVariants}> 
              {product.variants.map(item => {
                return (
                <div key={item} className={styles.variant + ` variant-${item}`} variant-color={item}></div>)
              })}
            </div>
            <div className={styles.productPreviousPrice}>From: ${product.previousPrice}</div>
            <div className={styles.productPrice}>To: ${product.price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context)  => {
  var product: DisplayableProductInterface;

  // @ts-ignore
  product = await Product.getProduct(context.params.product);

  return { 
    props: {
      product
    }  
  }
}

export default ProductDetailsBox;

