const ItemListContainer = ({greeting}) => {
    return(
       <div className="container my5">
            <div className="row text-center">
                <div className="alert alert-danger p-3 display-3" role="alert">{greeting}</div>
            </div>
       </div>
    )
}

export default ItemListContainer;