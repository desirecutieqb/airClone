import { useReducer, useEffect, useContext, useRef } from 'react';
import star from "../public/assets/star.png"
import { ThemeContext } from '../context/themeContext';

function badgeTitleReducer(state, action) {
    switch (action.type) {
        case 'SOLD_OUT':
            return 'SOLD OUT';
        case 'ONLINE':
            return 'ONLINE';
        default:
            return '';
    }
}

export default function Card(props) {
    const [badgeTitle, dispatchBadgeTitle] = useReducer(badgeTitleReducer, '');
    const { theme, toggleTheme } = useContext(ThemeContext);
    const imgRef = useRef(null);

    useEffect(() => {
        if (props.openSpots === 0) {
            dispatchBadgeTitle({ type: 'SOLD_OUT' });
        } else if (props.location === "Online") {
            dispatchBadgeTitle({ type: 'ONLINE' });
        } else {
            dispatchBadgeTitle({ type: 'RESET' });
        }
    }, [props.openSpots, props.location]);

    useEffect(() => {
        console.log('Image element:', imgRef.current);
    }, [imgRef]);

    return (
        <div className={`card ${theme}`}>
            {
                badgeTitle &&
                <div className="card-badge"><h3>{badgeTitle}</h3></div>
            }
            <img ref={imgRef} src={`../public/assets/${props.image}`} alt="" className="card" />
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
