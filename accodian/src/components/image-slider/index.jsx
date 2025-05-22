import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import './styles.css'

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {

            setLoading(true)
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5')
            const data = await response.json()
            // setImages(data)

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) =>
            prev === images.length - 1 ? 0: prev + 1
          );
        }, 2000);
      
        return () => clearInterval(interval);
      }, [images,currentSlide]);
    

    function handleNext() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    
    function handlePrev() {
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url])

    console.log(images)

    if (loading) {
        return <div>Loading data ! please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleNext} />

        {images && images.length ? images.map((imageItem, index) => (
            <img
                key={imageItem.id}
                src={imageItem.download_url}
                // alt={`Image ${currentIndex}`}
                className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
        )) : null}

        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handlePrev} />
        <span className="circle-indicators">
            {
                images && images.length ? images.map((_, index) => <button 
                key={index} 
                className={currentSlide===index?"current-indicator":"current-indicator inactive-indicator"}
                onClick={()=>currentSlide(index)}>

                </button>) : null
            }
        </span>
    </div>
}

/////