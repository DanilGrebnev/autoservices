import './header.css'
import logo from '../../img/Logo.svg'
import HeaderItem from './headerItem'
const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <ul>
                    <HeaderItem text='Товары' />
                    <HeaderItem text='Услуги' />
                    <HeaderItem text='Компания' />
                    <HeaderItem text='Записаться на приём' />
                </ul>

                <img className="header-logo" src={logo} alt="haeder-logo" />
                <div id="cube"></div>
                
            </div>
        </section>
    )
}

export default Header