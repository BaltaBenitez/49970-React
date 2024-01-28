import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json"
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos ] = useState([])
    const {id} = useParams();
    
    useEffect(() =>{
        const promesa = new Promise((resolve) => {   
            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
        })
        promesa.then(data =>{
            setProductos(data)
        })

    }, [id]);

    return(
       <div className="container my5">
            <div className="row text-center">
                {/* <div className="alert alert-danger p-3 display-3" role="alert">{greeting}</div> */}
                {productos.map(item => (
                    <div key={item.id} className="col-md-3">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.title}/>
                            <div className="card-body">
                                <p className="card-title">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    )
}

export default ItemListContainer;