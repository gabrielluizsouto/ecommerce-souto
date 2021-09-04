import styles from './Menu.module.css'
import Link from 'next/link'

const Menu: React.FC = () => {
    return (
        <div className={styles.menuContainer}>
            <Link href="/">
                <a className={styles.menuCategory}><span>
                    All Products
                </span></a>
            </a>
            <a href="/category/tvs" className={styles.menuCategory}>
                <span>
                    TVs
                </span>
            </a>
            <a href="/category/games" className={styles.menuCategory}>
                <span>
                    Games
                </span>
            </a>
            <a href="/category/sound systems" className={styles.menuCategory}>
                <span>
                    Sound systems
                </span>
            </a>
            <a href="/category/phones" className={styles.menuCategory}>
                <span>
                    Phones
                </span>
            </a>
            <a href="/category/computers" className={styles.menuCategory}>
                <span>
                    Computers
                </span>
            </a>
        </div>
    );
}

export default Menu;
