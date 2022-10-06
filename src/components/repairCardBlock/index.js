import state from '../../state'
import Card from '../block/card'
import './repairCardBlock.css'

const RepairCardBlock = () => {

    const { repairCard } = state

    return (
        <div id='card-wrapper' className='container'>
            {repairCard.map(el => {
                return <Card
                    key={el.id}
                    img={el.img}
                    title={el.title}
                    price={el.price}
                    styles={el.styles}
                />
            })}
        </div>
    )
}
export default RepairCardBlock