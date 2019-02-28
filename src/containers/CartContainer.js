import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, closeCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, closeCart, isOpen }) => (
  <Cart
    isOpen = {isOpen}
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    onCloseClicked={() => closeCart()}
    />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isOpen: state.cart.isOpen
})

export default connect(
  mapStateToProps,
  { checkout, closeCart }
)(CartContainer)
