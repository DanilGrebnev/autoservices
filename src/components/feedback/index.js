import './feedback.css'
//Блок с отзывами
const Feedback = () => {
    return (
        <section id="feedback">
            <h2 className="title">Отзывы наших клиентов</h2>
            {/* <h6>Гарантия распрострнаяется на работу при условии заказа зап. частей через наших специалистов</h6> */}
            <section id="grid" className='container'>
                <div className="grid__item">
                    <h3>Сергей</h3>
                </div>
                <div className="grid__item">
                    <h3>Ростислав</h3>
                </div>
                <div className="grid__item">
                    <h3>Максим</h3>
                </div>
                <div className="grid__item">
                    <h3>Евгений</h3>
                </div>
            </section>
        </section >
    )
}

export default Feedback