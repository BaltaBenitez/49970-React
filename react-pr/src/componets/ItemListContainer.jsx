import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json"
//import { Link, NavLink, useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [items, setItem ] = useState([])
    const {id} = useParams();
    
    useEffect(() =>{
        const promesa = new Promise((resolve) => {   
            resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos)
        }) //2000 
        promesa.then(data =>{
            setItem(data)
        })

    }, [id]);

    return(
        <>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer;