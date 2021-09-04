import styles from './SearchBar.module.css'

const SearchBar: React.FC = () => {
    return(
        <div className={styles.searchBarContainer}> 
            <form action="/search">
                <label htmlFor="header-search" className={styles.searchLabel}>Search</label>
                <input 
                    className={styles.searchInput}
                    type="text" 
                    id="header-search"
                    placeholder="What are you searching for?"
                    name="query"
                />
                <button type="submit" className={styles.searchButton}>🔎</button>
            </form>
        </div>
    );
}

export default SearchBar;
