import Card from "./Card"
import data from "./data"
import Hero from "./Hero"
export default function Main() {

    const cardData = data.map(data => {
        return <Card
            key={data.id}
            image={data.image}
            rating={data.rating}
            reviewCount={data.reviewCount}
            country={data.country}
            title={data.title}
            price={data.price}
            openSpots={data.openSpots}
            location={data.location} />
    })
    return (
        <main className='Main'>
            <div className="container">
                <Hero />
                <section className='Cards'>
                    {cardData}
                </section>
            </div>
        </main>
    )
}