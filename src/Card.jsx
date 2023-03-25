import star from "./assets/star.png"
export default function Card(props) {
    return (
        <div className={`card${props.cardNumber}`}>
            <img src={props.image} alt="" className={`card${props.cardNumber}`} />
            <div className="card-stats">
                <img src={star} alt="" className='card-star' />
                <span>{props.rating}</span>
                <span className='rating-country'>({props.reviewCount}){props.country}</span>
            </div>
            <p className='card-desk'>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}