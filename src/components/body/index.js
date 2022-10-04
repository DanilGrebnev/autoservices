import './body.css'
import Form from './form'
import Card from '../block/card'
import img1 from '../../img/1.jpg'
import WhiteButton from '../block/whiteButton'
import Record from '../record'

const Body = () => {

    const cardState = [
        {
            id: 1,
            img: img1,
            title: 'Шиномонтаж',
            price: 500,
        },
        {
            id: 2,
            img: img1,
            title: 'Ремонт и правка дисков',
            price: 500,
        },
        {
            id: 3,
            img: img1,
            title: 'Сезонное хранение шин',
            price: 500,
        }
    ]

    return (
        <section id="body">
            <Form />
            <h2 className='title'>Проводим работы любой сложности</h2>
            <div className='container'>
                {cardState.map(el => {
                    return <Card
                        key={el.id}
                        img={el.img}
                        title={el.title}
                        price={el.price}
                    />
                })}
            </div>
            <WhiteButton text='посмотреть все услуги' />
            <div className='container'>
                <Record />
            </div>
            <h2 className='title'>Гарантия</h2>
        </section>
    )
}

export default Body