import Image from 'next/image'
import { DisplayableProductInterface } from '../../interfaces'
import styles from './ProductCard.module.css'
import StarRating from '../StarRating'

interface Props {
    product: DisplayableProductInterface;
    imageWidth?: number,
    imageHeight?: number
}

const ProductCard: React.FC<Props> = ({ product, imageWidth = 200, imageHeight = 200 }) => {
    return (
        <div className={styles.productCard}>
            <a href={`/product/${product.id}`}>
                <div className={styles.productImage}>
                    <Image src={product.image} alt={product.name} width={imageWidth} height={imageHeight}/>
                </div>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productRating}>
                    {product.rating}
                    <StarRating starsNumber={product.rating}/>
                </div>
                <div className={styles.productPreviousPrice}>De: R$ {product.previousPrice}</div>
                <div className={styles.productPrice}>Por: R$ {product.price}</div>
            </a>
        </div>
    )
}

export default ProductCard;
