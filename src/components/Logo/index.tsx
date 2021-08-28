//styles
import styles from './/Logo.module.css'
import Link from 'next/link'

const Logo: React.FC = () => {
    return (
        <div className={styles.logocontainer}>
            <Link href="/" passHref={true}>
                <h1>Ecommerce Souto</h1>
            </Link>
        </div>
    )
}

export default Logo;
