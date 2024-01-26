import arrayIMG from "../json/contenidocards.json"
import { useEffect, useState } from "react";

const Card = () => {
    const [contenidos, setContenido] = useState([])
    
    useEffect(() => {
        setContenido(arrayIMG)
    })

    return(
        <div className="row">
            {contenidos.map(conte =>(
                <div key={conte.id} className="card mb-3" style={{maxWidth:`540px`}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={conte.imgUrl} className="img-fluid rounded-start" alt={conte.imgAlt}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{conte.imgAlt}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Card;