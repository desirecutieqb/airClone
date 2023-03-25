import image from "../public/assets/photo-grid.png"

export default function Hero(){
    return (
        <div className="Hero">
            <img src={image} alt="-_-" className='photo-grid' />
            <h1 className="Main-text">Online interview</h1>
            <p className='description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}