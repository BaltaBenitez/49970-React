import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card border-0">
                <Link className="text-dark text-decoration-none"to={"/item/" + item.id} >
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <p><b>$ {item.price}</b></p> {/* agregar btn row y col */}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;