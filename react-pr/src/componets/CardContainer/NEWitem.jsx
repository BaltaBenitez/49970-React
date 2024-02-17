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
                    <div key={it.id} className="col-md-3">
                        <div className="card">
                            <img src={it.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="bg-danger rounded text-white text-center">NUEVO</p>
                                <p className="card-text">{it.title}</p>
                                <p className="card-text text-center">{it.price}</p>
                            </div>
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