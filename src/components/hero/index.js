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
                <p>Диагностика подвески </p>
                <p>бесплатно!</p>

                {/* <WhiteButton text="оставить заявку" /> */}
            </div>
            <div id="form-title">Ремонт <span>всех</span> марок автомобилей <span><a>VAG</a></span> в Волгограде </div>
        </section>
    )
}
export default Hero