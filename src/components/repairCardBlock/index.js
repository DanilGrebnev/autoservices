import state from '../../state'
import Card from '../block/card'
import './repairCardBlock.css'

const RepairCardBlock = () => {

    const { repairCard } = state

    return (
        <section id='card-wrapper'>
            {repairCard.map(el => {
                return <Card
                    key={el.id}
                    img={el.img}
                    title={el.title}
                    price={el.price}
                    styles={el.styles}
                />
            })}

        </section>
    )
}
export default RepairCardBlock