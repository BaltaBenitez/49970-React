import KTMimg from "../assets/KTM.jpg"
import Ampol from "../assets/Ampol.webp"

const Cards2 = () => {
    return(
        <>
            <div className="row">
                <div className="card mb-3" style={{maxWidth:`540px`}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={KTMimg} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Red Bull KTM Racing</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{maxWidth:`540px`}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Ampol} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Red Bull Ampol Racing</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )    
}

export default Cards2;