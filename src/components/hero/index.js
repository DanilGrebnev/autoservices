import './hero.css'
import bmw1 from '../../img/bmw2.jpg'
import WhiteButton from '../../components/block/whiteButton'
const style = {
    backgroundImage: `url(${bmw1})`
}

const Hero = () => {
    return (
        <section style={style} id="hero">
            <div id="hero-add">
                <p>Диагностика ходовой</p>
                <p>Бесплатно!</p>

                <WhiteButton text="оставить заявку" />
            </div>
            <div id="form-title">Оставьте <span><a>заявку</a></span> для расчёта примерной стоимости ремонта, и мы свяжемся с вами в <span>ближайшее</span> время!</div>
        </section>
    )
}
export default Hero