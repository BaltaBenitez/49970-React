import iconCart from "../assets/carritoICON.svg"

const CarWidget = () => {
    return(
        <button type="button" className="btn btn-primary position-relative">
            <img src={iconCart} alt="" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CarWidget;