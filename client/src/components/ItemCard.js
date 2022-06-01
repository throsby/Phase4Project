const ItemCard = ({element}) => {

    const {name, stock, price, description} = element

    return (
        <div className="item-card">
            <h2>{name}</h2>
            <h4>Stock: {stock}</h4>
            <h4>Price: {price}</h4>
            <p>Description: <br/>{description}</p>
        </div>
    )
}

export default ItemCard;