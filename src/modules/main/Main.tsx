import './Main.scss'
import { ISlide } from '../../utils/types'
import { useEffect, useState } from 'react'
import { Navigation, SlidesList } from '../../components'
import data from '../../utils/data.json'

function Main() {

    const [slides, setSlides] = useState<ISlide[]>([])
    const [currentSlide, setCurrentSlide] = useState<number>(1)


    useEffect(() => {
        setSlides(data)
    }, [])

    return (
        <div className='main'>
            <div className="main__row">
                <SlidesList slides={slides} currentSlide={currentSlide} />
                <Navigation setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} slides={slides} />
            </div>
        </div>
    )
}

export { Main }
