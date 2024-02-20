import { useEffect, useState } from "react";
import arrayProductos from "../../json/productos.json"
import { Link } from "react-router-dom";

const NEWitem = () => {
    const [items, setItem ] = useState([])

    const scrollToTop = () => {
        window.scrollTo({
          top: -1,
          //behavior: "smooth"
        });
    };
    
    useEffect(() =>{
        const productosNuevos = arrayProductos.filter(item => item.new === true);
        const primerosCuatroProductos = productosNuevos.slice(0, 4);
        
        const promesa = new Promise((resolve) => {
            resolve(primerosCuatroProductos);
        });
        promesa.then(data =>{
            setItem(data)
        })
    }, []);

    return( 
        <div className="container my-5">
            <div className="row">
                {items.map(it => (
                    <div key={it.idx} className="col-md-3">
                        <div className="card border-dark">
                            <Link className="text-dark text-decoration-none"to={"/item/" + it.id}>
                                <img src={it.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="bg-danger rounded text-white text-center">NUEVO</h5>
                                    <h5 className="card-text">{it.title}</h5>
                                    <h5 className="card-text text-center"><b>$ {it.price}</b></h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row text-center my-5">
                <h3 className="col-12 bg-primary">
                    <Link className="nav-link text-light fs-5" to={"/contenido"} onClick={scrollToTop}>MáS PRODUCTOS</Link>
                </h3>
            </div>
        </div>
    )
}

export default NEWitem;