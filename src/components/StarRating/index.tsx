import styles from './StarRating.module.css'

interface Props {
    starsNumber: number;
}

var MAXIMUM_STARS = 5;
const generateStarsArray = (starsNumber: number) => {
    var validStars = starsNumber;
    var array: Array<Boolean>  = new Array(5);

    for (let index = 0; index < array.length; index++) {
        array[index] = index < validStars ? true : false;
    }

    return array;
}

const StarRating: React.FC<Props> = ({ starsNumber }) => {
    var starsArray: Array<Boolean> = generateStarsArray(starsNumber);
    
    return (
        <div className={styles.staRatingContainer}>
            {starsArray.map((elem, index) => {
                return (
                    <div className={`star-${elem}`} key={index}>
                        {elem ? 
                        <div>⭐</div> : ''}
                    </div>
                )
            })}
        </div>
    )
}

export default StarRating;
