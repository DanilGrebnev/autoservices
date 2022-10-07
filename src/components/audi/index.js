import './audi.css'
import audi from '../../img/audi.png'
import DotsAudi from '../block/dots_audi'

const style = {
    backgroundImage: `url(${audi})`
}

const Audi = () => {
    return (
        <>
            <h2 className="title">Компьютерная диагностика</h2>
            <section id="audi" className='container'>
                <div>
                    {/* <img src={audi} /> */}
                    <DotsAudi />
                </div>
            </section>
        </>
    )
}
export default Audi