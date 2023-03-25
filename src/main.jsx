import image from "./assets/photo-grid.png"
import photo1 from "./assets/photo1.png"
import photo2 from "./assets/photo2.png"
import photo3 from "./assets/photo3.png"
import Card from "./Card"

export default function Main() {
    return (
        <main className='Main'>
            <div id="container">
                <img src={image} alt="-_-" className='photo-grid' />
                <section className='container'>
                    <section className='Main-text'>
                        <h1>Online interview</h1>
                        <p className='description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                    </section>
                    <section className='Cards'>
                        <Card cardNumber={1}
                            image={photo1}
                            rating="5.0"
                            reviewCount={6}
                            country="USA"
                            title="Life Lessons with Katie Zaferes"
                            price={136} />
                        <Card cardNumber={2}
                            image={photo2}
                            rating="5.0"
                            reviewCount={30}
                            country="USA"
                            title="Learn wedding photography"
                            price={125} />
                        <Card cardNumber={3}
                            image={photo3}
                            rating="4.8"
                            reviewCount={2}
                            country="USA"
                            title="Group Mountain Biking"
                            price={50} />
                    </section>
                </section>
            </div>
        </main>
    )
}