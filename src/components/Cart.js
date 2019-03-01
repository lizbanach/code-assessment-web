import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import SVG from 'react-inlinesvg';

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
    <em>Please add some products to cart.</em>
  )

  return (
    <div className={"cart" + (isOpen ? ' open' : '')}>
      <div className="cart-content">
        <button className="btn btn-close-cart" onClick={onCloseClicked}>
          <SVG src="svg/x.svg"/>
        </button>
        <h1>Your Cart</h1>
        <div>{nodes}</div>
        <p>Total: &#36;{total}</p>
        <button className="btn btn-blue btn-checkout" onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
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
