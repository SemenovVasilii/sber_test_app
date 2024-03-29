import './SlidesList.scss'
import { ISlide } from '../../utils/types'
import { FC } from 'react';
import { Slide } from '..';

interface SlidesListProps {
    slides: ISlide[];
    currentSlide: number
}

const SlidesList: FC<SlidesListProps> = ({ slides, currentSlide }) => {
    return (
        <div className='slideslist' >
            <div className="slideslist__slide">
                {
                    slides.map((slide: ISlide) => (
                        slide.id === currentSlide &&
                        <Slide slide={slide} key={slide.id} />
                    ))
                }
            </div>
            <div className="slidelist__counter">
                <p className='counter__number'>{currentSlide}</p> из <p className='counter__number'>{slides.length}</p>
            </div>
        </div>
    )
}

export { SlidesList }
