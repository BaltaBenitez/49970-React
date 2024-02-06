import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            console.log(`agregaste ${counter} productos al carrito!!!. QUEDAN ${itemStock - counter} productos disponibles`);
        }
    }

    return (
        <>
            <div className="row my-1 text-center">
                <div className="col">
                    <div className="btn-group btn-group-md me-3" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-danger px-3">{counter}</button>
                        <button type="button" className="btn btn-danger" onClick={incrementar}>+</button>
                    </div>
                    <div className="btn-group btn-group-md" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning px-3" >BASURA</button>
                    </div>
                </div>
            </div>
            <div className="row my-1 text-center">
                <div className="col">
                    <div className="btn-group btn-group-md" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger px-5" onClick={onAdd}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount;