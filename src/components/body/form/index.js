const Form = () => {
    return (
        <form id="body-form">
            <div>
                <select name="" id="">
                    <option>Производитель</option>
                </select>
                <select disabled="true" name="" id="">
                    <option>Модель</option>
                </select>
                <select disabled="true" name="" id="">
                    <option>Поколение</option>
                </select>
                <select disabled="true" name="" id="">
                    <option>Модификация</option>
                </select>
                <select disabled="true" name="" id="">
                    <option>Кузов</option>
                </select>
            </div>

            <button>Оставить заявку</button>

        </form>
    )
}
export default Form