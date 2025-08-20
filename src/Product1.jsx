import './Product1.css'

export default function Product1() {

    const image = "/-original-imagbwf3wvhzfh5z.webp"
    return (
        <div className="maina">
            <div className="heading">
                <h2>Bueaty,health and more</h2>
            </div>
            <div className="carousel">
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
                <a href="#"><div className="card"><img src={image} alt="" /><p>Coffe Powder</p><h3>Upto 80% Off</h3></div></a>
            </div>
        </div>

    )
}