import './card.css'

const Card = ({ img, title, price, styles = undefined }) => {
    //Если есть стили, то они передадутся в style

    const style = {
        backgroundImage: `url(${img})`,
        ...styles
    }

    return (
        <div className="card">
            <div className='block1'></div>
            <div style={style} className='card__img'></div>
            <h3>{title}</h3>
            <div className='block2'>
                <button>Подробнее</button>
            </div>
        </div>
    )
}

export default Card