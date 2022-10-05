import './card.css'
import timeIcon from '../../../img/time.svg'
import priceIcon from '../../../img/price.svg'


const Card = ({ img, title, price, styles = undefined }) => {
    //Если есть стили, то они передадутся в style

    const style = {
        backgroundImage: `url(${img})`,
        ...styles
    }

    return (
        <div className="card">
            <div style={style} className='card__img'></div>
            <div className='card__content'>
                <div>
                    <h3>{title}</h3>
                    {/* <p>
                        <img src={timeIcon} />
                        Ежедневно с 9:00 до 21:00, без перерывов
                    </p>
                    <p> {price} <img className='price' src={priceIcon} /></p> */}
                </div>
            </div>
        </div>
    )
}

export default Card