const Cart = () => {
    return(
        <div>
<section>
    <div className="product">
      <img
        src="https://b3h2.scene7.com/is/image/BedBathandBeyond/444800393854_imageset"
        alt="The spatual to rule them all"
      />
      <div className="description">
      <h3>Spatuala Supremo</h3>
      <h5>$15.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
        </div>
    )
}

export default Cart;