import './whiteButton.css'

const WhiteButton = ({ text = "подробнее" }) => {
    
    return (
        <div className="white-button">{text}</div>
    )
}
export default WhiteButton