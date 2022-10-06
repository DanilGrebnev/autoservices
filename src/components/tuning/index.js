import './tuning.css'
import bg from '../../img/bgel.jpg'
import CardTuning from './CardTuning'
import state from '../../state'


const Tuning = () => {

    const { tuningCard } = state

    const style = {
        backgroundImage: `url(${bg})`
    }

    return (
        <>
            <h2 className='title tuning'>Чип-тюнинг</h2>
            <section style={style} id="tuning" className='container'>
                <div className="tuning__col1">
                    <h3>Мы предоставляем услуги по чип-тюнингу авто</h3>
                    <h4>Зачем прошивать ЭБУ?</h4>
                    <p>Чип-тюнинг увеличит мощность и крутящий момент автомобиля.</p>
                    <p>
                        После прошивки педаль газа станет более отзывчивой. Улучшится динамика при
                        включенном кондиционере. Перестанут беспокоить провалы при разгоне.
                        Водить станет намного комфортнее и приятнее.
                    </p>
                    <p>
                        <a href="#record">Узнайте, на что способен ваш авто!</a>
                    </p>
                </div>
                <div className="tuning__col2">
                    {tuningCard.map(el => <CardTuning
                        key={el.id}
                        h4={el.h4}
                        desc={el.desc}
                        img={el.img}
                    />)}


                </div>
            </section>
        </>
    )
}

export default Tuning