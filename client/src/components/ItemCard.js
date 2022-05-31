const ItemCard = ({element}) => {

    const {name, stock, price, description} = element

    return (
        <div>
            <h2>{name}</h2>
            <h4>{stock}</h4>
            <h4>{price}</h4>
            <p>{description}</p>
        </div>
    )
}

export default ItemCard;