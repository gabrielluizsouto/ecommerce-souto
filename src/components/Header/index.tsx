import styles from './Header.module.css'
import Logo from '../Logo'
import Menu from '../Menu'
import SearchBar from '../SearchBar'

const Header = () => {
    return (
        <div className={styles.headerConteiner}>
            <div className={styles.logoAndSearch}>
                <Logo />
                <SearchBar />
            </div>
            <Menu /> 
        </div>
    );
}

export default Header;
