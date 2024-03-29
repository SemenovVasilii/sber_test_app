import './Slide.scss'
import { ISlide } from '../../utils/types'
import { FC } from 'react'

interface SlideProps {
    slide: ISlide
}

const Slide: FC<SlideProps> = ({ slide }) => {
    return (
        <div className='slide'>
            <div className="slide__column">
                <div className="slide__title">
                    {slide.title}
                </div>
                <div className="slide__image">
                    <img src={slide.image} alt="#" loading='lazy' />
                </div>
                <div className="slide__description">
                    {slide.description}
                </div>
            </div>
        </div>
    )
}

export { Slide }
