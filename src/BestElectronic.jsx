import './BestElectronic.css'

export default function BestElectronic() {

    const headline = "Best of Electronics"
    const image = "/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.webp"
    const add = "/ce3cf81edb760559.webp"

    return (
        <div>

            <div className="mainContainer">

                <div className="container">
                    <h1>{headline}</h1>
                    <div className="holder">
                        <a href="#">
                            <div className="subContainer">
                                <img src={image} alt="image" />
                                <p>Best headphones under @4999</p>
                                <h2>grab now</h2>
                            </div>
                        </a>
                        <a href="#">
                            <div className="subContainer">
                                <img src={image} alt="image" />
                                <p>Best headphones under @4999</p>
                                <h2>grab now</h2>
                            </div>
                        </a>
                        <a href="#">
                            <div className="subContainer">
                                <img src={image} alt="image" />
                                <p>Best headphones under @4999</p>
                                <h2>grab now</h2>
                            </div>
                        </a>
                        <a href="#">
                            <div className="subContainer">
                                <img src={image} alt="image" />
                                <p>Best headphones under @4999</p>
                                <h2>grab now</h2>
                            </div>
                        </a>
                        <a href="#">
                            <div className="subContainer">
                                <img src={image} alt="image" />
                                <p>Best headphones under @4999</p>
                                <h2>grab now</h2>
                            </div>
                        </a>
                        <a href="#">
                            <div className="subContainer">
                                <img src={image} alt="image" />
                                <p>Best headphones under @4999</p>
                                <h2>grab now</h2>
                            </div>
                        </a>

                    </div>
                </div>

                <div className="add">
                    <a href="#">
                        <img src={add} alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}