import { useContext } from "react";
import { CardContext } from "./context/CardContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, addItem, removeItem, cantTotalProductos, sumaTotalProductos} = useContext(CardContext);
    
    if (cantTotalProductos() == 0) {
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-warning" role="alert">
                            <h3 className="py-3"><b>No hay productos, el carrito vacio...</b></h3>
                            <Link to={"/contenido"} className="btn btn-outline-primary"><b>Mirar nuestros productos</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h2><b>Tu Compra</b></h2>
                </div>
            </div>
            <div className="row">
                <table className="table table-info">
                    <tbody className="table-info">
                        {cart.map(product =>
                        <tr key={product.id}>
                            <td><img src={product.image} alt={product.title} width={80}/></td>
                            <td><h6><b>{product.title}</b></h6></td>
                            <td><b>{product.quantity * product.quantity} unidades</b></td>
                            <td><b>$ {product.price}</b></td>
                            <td><a href="#" onClick={()=> {removeItem(product.id)}} className="btn btn-outline-dark rounded" ><i className="bi bi-trash3"></i></a></td>
                        </tr>
                        )}
                        <tr>
                            <td colSpan={3}><h5><b>Suma Total:</b></h5></td>
                            <td><h5><b >$ {sumaTotalProductos()}</b></h5></td>
                            <td><a href="#" className="btn btn-outline-success rounded" ><i class="bi bi-check-square"></i> Confirmar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart;