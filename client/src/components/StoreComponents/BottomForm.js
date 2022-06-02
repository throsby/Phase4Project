const BottomForm = ({setModalVisible}) => {

    function handleClick () {
        setModalVisible(prevState => {return !prevState})
    }

    return(
        <>
            <div className="mask" onClick={handleClick}>
                <div></div>
            </div>
        </>
    )
}

export default BottomForm;