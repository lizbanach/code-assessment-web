import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import SVG from 'react-inlinesvg'

const Cart  = ({ isOpen, products, total, onCheckoutClicked, onCloseClicked, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem
        productTitle={product.productTitle}
        price={product.price.value}
        quantity={product.quantity}
        key={product.id}
        onRemoveClicked={() => removeFromCart(product.id)}
        onIncreaseClicked={() => increaseQuantity(product.id)}
        onDecreaseClicked={() => decreaseQuantity(product.id)}
      />
    )
  ) : (
    <div className="cart-empty txt-gray txt-center lead-3 lead-bottom-3">
      <SVG src="svg/cart.svg"/>
      <div>
      Please add some products to your cart.
      </div>
    </div>
  )

  return (
    <div className={"cart" + (isOpen ? ' open' : '')}>
      <div className="cart-content">
        <div className="cart-products container">
          <button className="btn btn-close-cart" onClick={onCloseClicked}>
            <SVG src="svg/x.svg"/>
          </button>
          <div className="cart-heading">
            <h2 className="txt-bold">Your Cart</h2>
          </div>
          <div>{nodes}</div>
          <div className="cart-total row lead-1">
            <div className="col-is-6">
              <p className="txt-bold">Total</p>
            </div>
            <div className="col-is-6 txt-right txt-light">
              <p>&#36;{total}</p>
            </div>
          </div>
          <button className="btn btn-blue btn-checkout" onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onCloseClicked: PropTypes.func,
  removeFromCart: PropTypes.func,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state)
})

export default connect(
  mapStateToProps,
  { removeFromCart, increaseQuantity, decreaseQuantity }
)(Cart)
