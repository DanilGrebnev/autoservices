// import img1 from '../img/1.jpg'
import engine from '../img/engine2.png'
import podveska from '../img/hodovaya.png'
import kpp from '../img/kpp2.jpg'
import oilEngine from '../img/oil.png'
import oilKpp from '../img/kppOil.png'
import filter from '../img/filter.png'
//tuningCard
import chip from '../img/chip.png'
import quality from '../img/quality.png'
import price from '../img/price.png'

const state = {
    repairCard: [
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
            styles: {
                backgroundSize: '90%',
                backgroundPosition:"center",
            }
        },
        {
            id: 4,
            img: oilEngine,
            title: 'Замена масла двигателя',
            price: "диагностика от 800",
            styles: {/*инлайн стили*/ }
        },
        {
            id: 5,
            img: oilKpp,
            title: 'Замена масла трансмиссии',
            price: "диагностика от 500",
            styles: {
                backgroundSize: '60%',
            }
        },
        {
            id: 6,
            img: filter,
            title: 'Замена расходников',
            price: "диагностика от 500",
        }
    ],

    tuningCard: [
        {
            id: 1,
            img: price,
            h4: 'Тест-драйв 10 дней',
            desc: `Возврат денег и стоковой прошивки, если результаты после 
            обкатки не устраивают.`
        },
        {
            id: 2,
            img: quality,
            h4: 'Гарантия качества',
            desc: `Прошивки, которые мы используем, проверены 
            временем и являются эффективным методом увеличения мощности двигателя автомобиля.`
        },
        {
            id: 3,
            img: chip,
            h4: 'Проверенные прошивки',
            desc: 'Установленые прошивки динамичные, подходят под любые нормы Евро и безопасны для двигателя.'
        },


    ]

}

export default state