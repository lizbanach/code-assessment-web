import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { addToCart } from '../actions'
import { connect } from 'react-redux'

const ProductItem = ({ product, addToCart }) => {
  return (
  <div className="product col col-is-flush col-is-12 lead-1">
    <Product
      title={product.productTitle}
      price={product.price.value}
      inventory={product.inventory}
      onAddToCartClicked={() => addToCart(product.id)} />
  </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductItem)
