import './hero1.css'
import bg from '../../img/bg-bmw.jpg'
import Header from '../header'

const Hero = () => {

    const style = {
        backgroundImage: `url(${bg})`
    }

    return (
        <section style={style} id="hero">
            <div>
                <Header />
                <div id="hero__content">
                    <div className="col c1">
                        <h1>Техобслуживание и ремонт <br />автомобилей VAG в Волгограде!</h1>
                        <p>Ремонт BMW любой сложности от инженеров из космической отрасли. Оперативное решение вашей задачи с фотоотчетом по замененным деталям</p>
                    </div>
                    <div className='col 2'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero