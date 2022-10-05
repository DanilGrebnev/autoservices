import './record.css'
import img from '../../img/bmw1.png'
import WhiteButton from '../block/whiteButton'

const Record = () => {

    return (

        <section id="record" className='container'>
            <div id="record__content">
                <p>Быстрая запись</p>
                <p>на удобное <span>для вас</span></p>
                <p>время!</p>
                <WhiteButton text="Записаться" />
                <a href="#form-title" ><WhiteButton text="Оставить заявку" /></a>
            </div>
            <img src={img} />
        </section >
    )
}

export default Record