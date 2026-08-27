import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './styles.css'

const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleOnMouseClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }

    const handleOnMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handleOnMouseLeave = () => {
        setHover(rating)
    }

    return(
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index += 1;

                    return(
                        <FaStar 
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={()=>handleOnMouseClick(index)}
                        onMouseMove={()=>handleOnMouseEnter(index)}
                        onMouseLeave={()=>handleOnMouseLeave()}
                        size={40}
                        />
                    )
                })
            }

        </div>
    )
}

export default StarRating;