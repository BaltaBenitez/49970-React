const ItemDetail = ({item}) => {
    return(
        <div className="container border-bottom">
            <div className="row g-o">
                <div className="col-md-4">
                    <img src={item.image} alt={item.title} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h6 className="card-title m-5"><b>{item.title}</b></h6>
                        <p className="card-text m-5">{item.description}</p>
                        <p className="card-text text-center fs-3">${item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;