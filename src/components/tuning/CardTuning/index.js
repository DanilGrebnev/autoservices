import './cardTuning.css'

const CardTuning = ({ h4, desc, img }) => {
    return (
        <div className='tuning__card'>
            <div>
                <img src={img} />
                <h4>{h4}</h4>
            </div>
            <p>{desc}</p>
        </div>
    )
}


export default CardTuning