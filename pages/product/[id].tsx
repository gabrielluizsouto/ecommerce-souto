//external modules
import type { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

//styles
//import '../styles/Home.module.css'

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
      <div className="products-container">

        <div key={product.name}>
          <p>{product.id} | {product.name} | <strong>{product.price}</strong> | {product.category}</p>
          <Image src={product.image} alt={product.name} width={300} height={300}/>
        </div>

      </div>
      <div className="footer-container">

      </div>
      <div className="barra de busca">

      </div>

      <ProductCard product={product}/>

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

