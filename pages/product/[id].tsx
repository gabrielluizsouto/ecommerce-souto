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
import Logo from '../../src/components/Logo'
import ProductCard from '../../src/components/ProductCard'

interface Props {
  product: DisplayableProductInterface;
}

const ProductDetailsBox: NextPage<Props> = ({ product }) => {
  const router = useRouter();

  // useEffect(() => {
  //   router.push(product.name.replace(/\s/, '-'), undefined, {shallow: true});
  // }, []);

  return (
    <div className="main-container">
      <div className="search-bar-container">

      </div>
      <Logo />
      
      <div className={styles.productsContainer}>
        <div key={product.name}>
          <div className={styles.nameAndIdContainer}>
            <div className={styles.productId}>{product.id}</div>
            <div className={styles.productName}>{product.name}</div>
          </div> 
          <div className={styles.productImage}>
            <Image src={product.image} alt={product.name} width={300} height={300}/>
          </div>
          <div className={styles.productPreviousPrice}>De: R$: {product.previousPrice}</div>
          <div className={styles.productPrice}>Por: R$: {product.price}</div>
        </div>
      </div>
      <div className="footer-container">

      </div>
      <div className="barra de busca">

      </div>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context)  => {
  var product: DisplayableProductInterface;

  // @ts-ignore
  product = await Product.getProduct(context.params.id);

  return { 
    props: {
      product
    }  
  }
}

export default ProductDetailsBox;

