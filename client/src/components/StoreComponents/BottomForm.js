const BottomForm = ({setModalVisible}) => {

    function handleClick () {
        setModalVisible(prevState => {return !prevState})
    }

    return(
        <>
            <div className="mask" onClick={handleClick}>
                <div></div>
                <form className="new-item-form">
                    <input type="file" />
                    <input type="text" placeholder="Item name"/>
                    <input type="text" />
                </form>
            </div>
        </>
    )
}

export default BottomForm;