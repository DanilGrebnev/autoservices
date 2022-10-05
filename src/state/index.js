import img1 from '../img/1.jpg'
import engine from '../img/engine2.png'
import podveska from '../img/hodovaya.png'
import kpp from '../img/kpp.jpg'
import oilEngine from '../img/oil.png'
import oilKpp from '../img/kppOil.png'
import filter from '../img/filter.png'

const state = {
    card: [
        {
            id: 1,
            img: engine,
            title: 'Ремонт двигателя',
            price: "диагностика от 800",
            styles: {
                backgroundPosition: "50% 30px",
            }
        },
        {
            id: 2,
            img: podveska,
            title: 'Ремонт ходовой',
            price: "диагностика от 500",
            styles: {
                // backgroundSize: '90%',
            }
        },
        {
            id: 3,
            img: kpp,
            title: 'Ремонт коробки передач',
            price: "диагностика от 500",
        },
        {
            id: 4,
            img: oilEngine,
            title: 'Замена масла двигателя',
            price: "диагностика от 800",
            styles: {/*инлайн стили*/}
        },
        {
            id: 5,
            img: oilKpp,
            title: 'Замена масла трансмиссии',
            price: "диагностика от 500",
            styles: {
                // backgroundPosition: 'center',
                backgroundSize: '70%',
                // backgroundRepeat: 'no-repeat',
            }
        },
        {
            id: 6,
            img: filter,
            title: 'Замена расходников',
            price: "диагностика от 500",
        }
    ]


}

export default state