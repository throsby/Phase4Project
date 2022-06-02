const AddItemButton = ({setModalVisible}) => {

    function handleClick () {
        setModalVisible(prevState => !prevState)
    }
    
    return(
        <div className="add-item-button" onClick={handleClick}>AddItemButton</div>
        
    )
}

export default AddItemButton;