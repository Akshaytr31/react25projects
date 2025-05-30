import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(0)
    }

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {
                index += 1
                return <FaStar
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    size={40}
                    color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                />
            })
        }
    </div>
}



