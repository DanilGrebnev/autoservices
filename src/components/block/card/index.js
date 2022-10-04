import './card.css'
import timeIcon from '../../../img/time.svg'
import priceIcon from '../../../img/price.svg'


const Card = ({ img, title, price }) => {

    const style = {
        backgroundImage: `url(${img})`
    }

    return (
        <div className="card">
            <div style={style} className='card__img'></div>
            <div className='card__content'>
                <div>
                    <h3>{title}</h3>
                    <p>
                        <img src={timeIcon} />
                        Ежедневно с 9:00 до 21:00, без перерывов
                    </p>
                    <p><img src={priceIcon} /> от {price} <span></span></p>
                </div>
            </div>
        </div>
    )
}

export default Card