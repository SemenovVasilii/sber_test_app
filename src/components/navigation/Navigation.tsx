import './Navigation.scss'
import next from '../../utils/images/next.png'
import previous from '../../utils/images/previous.png'
import start from '../../utils/images/start.png'
import pause from '../../utils/images/pause.png'
import first from '../../utils/images/first.png'
import last from '../../utils/images/last.png'
import { FC, useCallback, useEffect, useRef } from 'react'
import { ISlide } from '../../utils/types'

interface NavigationProps {
    setCurrentSlide: (setSlider: (currentSlide: number) => number) => void;
    currentSlide: number;
    slides: ISlide[]
}

const Navigation: FC<NavigationProps> = ({ currentSlide, setCurrentSlide, slides }) => {

    const slider = useRef<number | null>(null)

    const handleFirstSlide = useCallback(() => {
        clearInterval(slider.current!)
        slider.current = null
        setCurrentSlide(() => 1)
    }, [setCurrentSlide])

    const handleNextSlide = useCallback(() => {
        clearInterval(slider.current!)
        slider.current = null
        setCurrentSlide((currentSlide) => {
            if (currentSlide < slides.length) {
                return currentSlide + 1
            } else {
                return 1
            }
        })
    }, [setCurrentSlide, slides.length])

    const handleNextSlideAuto = useCallback(() => {
        setCurrentSlide((currentSlide) => {
            if (currentSlide < slides.length) {
                return currentSlide + 1
            } else {
                return 1
            }
        })
    }, [setCurrentSlide, slides.length])

    const handlePreviousSlide = useCallback(() => {
        clearInterval(slider.current!)
        slider.current = null
        if (currentSlide > 1) {
            setCurrentSlide((currentSlide) => currentSlide - 1)
        }
    }, [currentSlide, setCurrentSlide])

    const handleStartSlide = useCallback(() => {
        if (!slider.current) {
            slider.current = setInterval(() => handleNextSlideAuto(), 2000)
        }
    }, [handleNextSlideAuto])


    const handleStopSlide = useCallback(() => {
        clearInterval(slider.current!)
        slider.current = null
    }, [])

    const handleLastSlide = useCallback(() => {
        clearInterval(slider.current!)
        slider.current = null
        setCurrentSlide(() => slides.length)
    }, [setCurrentSlide, slides.length])

    useEffect(() => {
        return () => {
            clearInterval(slider.current!)
            slider.current = null
        }
    }, [])

    return (
        <div className='navigation'>
            <div className="navigation__row">
                <button className="navigation__first" onClick={handleFirstSlide}>
                    <img src={first} alt="#" />
                </button>
                <button className="navigation__previous" onClick={handlePreviousSlide}>
                    <img src={previous} alt="#" />
                </button>
                <button className="navigation__start" onClick={handleStartSlide}>
                    <img src={start} alt="#" />
                </button>
                <button className="navigation__stop" onClick={handleStopSlide}>
                    <img src={pause} alt="#" />
                </button>
                <button className="navigation__next" onClick={handleNextSlide}>
                    <img src={next} alt="#" />
                </button>
                <button className="navigation__last" onClick={handleLastSlide}>
                    <img src={last} alt="#" />
                </button>
            </div>
        </div>
    )
}

export { Navigation }
