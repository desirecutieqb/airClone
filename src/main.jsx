import Card from "./Card"
import data from "./data"
import Hero from "./Hero"
export default function Main() {

    const cardData = data.map(item => {
        return <Card
            key={item.id}
            {...item} />
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