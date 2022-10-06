import './car.css'
import audi from '../../img/audi.png'

const style = {
    backgroundImage: `url(${audi})`
}

const Car = () => {
    return (
        <>
            <h2 className="title">Компьютерная диагностика</h2>
            <section id="car" className='container'>
                <div style={style} id="audi">

                </div>

            </section>
        </>
    )
}
export default Car