import './body.css'
import './animation.css'
import Card from '../block/card'
import state from '../../state'
import Record from '../record'
import { useState } from 'react'
import Tuning from '../tuning'
import RepairCardBlock from '../repairCardBlock'
import Car from '../car'

const Body = () => {
    const [open, setOpen] = useState(false)
    // const { card } = state

    return (
        <section id="body">
            <RepairCardBlock />
            <Car />
            <Record />
            <Tuning />
        </section>
    )
}

export default Body