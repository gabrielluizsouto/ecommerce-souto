import styles from './Menu.module.css'
import Link from 'next/link'

const Menu: React.FC = () => {
    return (
        <div className={styles.menuContainer}>
            <Link href="/" passHref>
                <a  className={styles.menuCategory}>
                    All Products
                </a>
            </Link>
            <Link  href="/category/tvs">
                <a className={styles.menuCategory}>
                    TVs
                </a>
            </Link>
            <Link href="/category/games" >
                <a className={styles.menuCategory}>
                    <span>
                        Games
                    </span>
                </a>
            </Link>
            <Link href="/category/sound systems">
                <a  className={styles.menuCategory}>
                    <span>
                        Sound systems
                    </span>
                </a>
            </Link>
            <Link href="/category/phones" >
                <a className={styles.menuCategory}>
                    <span>
                        Phones
                    </span>
                </a>
            </Link>
            <Link href="/category/computers" >
                <a className={styles.menuCategory}>
                    <span>
                        Computers
                    </span>
                </a>
            </Link>
        </div>
    );
}

export default Menu;
