import { useContext, useState } from "react";
import { CardContext } from "./context/CardContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, sumaTotalProductos} = useContext(CardContext);

    const generarOrden = () => {
        if (nombre.length === 0 || email.length === 0 || telefono.length === 0) {
            return false;
        }        

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.title, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumaTotalProductos();
        const order = {buyer:buyer, items:items, date:date, total:total};

        const db = getFirestore();//subir datos
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }
    
    return(
        <div className="container text-center">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6">
                        <form className="my-4">
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-info my-5">
                            <tbody className="table-info">
                                {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.image} alt={product.title} width={80}/></td>
                                    <td className="align-middle"><h6><b>{product.title}</b></h6></td>
                                    <td className="align-middle"><p><b>U {product.quantity}</b></p></td>
                                </tr>
                                )}
                                <tr>
                                    <td className="align-middle" colSpan={2}><h5><b>Suma Total:</b></h5></td>
                                    <td className="align-middle"><h5><b >$ {sumaTotalProductos()}</b></h5></td>
                                </tr>   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                {orderId ? <div className="col text-center">
                    <div class="alert alert-success p-5 text-center" role="alert">
                        <h2>Gracias por tu Compra!</h2>
                        <h3>Tu ID de Compra es: <b>{orderId}</b></h3>
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

export default Checkout;