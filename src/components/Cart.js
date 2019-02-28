import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'

const Cart  = ({ products, total, onCheckoutClicked, removeFromCart, increaseQuantity, decreaseQuantity }) => {
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
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
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
