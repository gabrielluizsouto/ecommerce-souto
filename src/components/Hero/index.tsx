import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className={styles.heroBox}>
        <h1> Welcome to Ecommerce Souto </h1>
        <h2> Buy what you want with the lowest price! </h2>
      </div>
    </div>
  )
}

export default Hero;