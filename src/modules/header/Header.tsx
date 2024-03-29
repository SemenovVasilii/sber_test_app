import './Header.scss'
import github from '../../utils/images/github.svg'

function Header() {
    return (
        <header className='header'>
            <div className="header__row">
                <div className="header__title">
                    Slider
                </div>
                <div className="header__git">
                    <a href="https://github.com/SemenovVasilii" className='git__link'>
                        <img src={github} alt="#" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export { Header }
