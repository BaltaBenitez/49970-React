import Cards1 from "./Cards1";
import Cards2 from "./Cards2";

const CardsContainer = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Cards1 />
                    <Cards2 />
                </div>
            </div>
        </>
    )
}

export default CardsContainer;