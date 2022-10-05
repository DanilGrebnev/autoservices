import './body.css'
import './animation.css'
import Form from './form'
import Card from '../block/card'
import state from '../../state'
import WhiteButton from '../block/whiteButton'
import Record from '../record'
import Feedback from '../feedback'
import { useState } from 'react'

const Body = () => {
    const [open, setOpen] = useState(false)
    const { card } = state

    return (
        <section id="body">
            <Form />
            <h2 className='title'>Проводим работы любой сложности</h2>
            <div id='card-wrapper' className='container'>
                {card.map(el => {
                    return <Card
                        key={el.id}
                        img={el.img}
                        title={el.title}
                        price={el.price}
                        styles={el.styles}
                    />
                })}
            </div>
            {/* <WhiteButton text='посмотреть все услуги' /> */}
            <Record />
            <Feedback />
        </section>
    )
}

export default Body