import star from "../public/assets/star.png"
export default function Card(props) {
    let badgeTitle;
    if (props.openSpots === 0) {
        badgeTitle = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeTitle = "ONLINE"
    }

    return (
        <div className="card">
            {
                badgeTitle &&
                <div className="card-badge"><h3>{badgeTitle}</h3></div>
            }
            <img src={`../public/assets/${props.image}`} alt="" className="card" />
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