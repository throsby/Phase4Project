
const StoreHeader = ({modalVisible, children}) => {

    return(
        <>
            <div className="store-header" style={{borderRadius: !modalVisible ? null : "0px", zIndex: !modalVisible ? null : 6, height: !modalVisible ? null : "45%", top: !modalVisible ? null : "55%", borderTopLeftRadius: !modalVisible ? null : "240px",borderTopRightRadius: !modalVisible ? null : "240px"}}></div>
            <div>{children}</div>
        </>
    )
}

export default StoreHeader;