import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => {
  return (
  <div className="product col col-is-12 lead-1">
    <Product
      title={product.productTitle}
      price={product.price.value}
      inventory={product.inventory} />
    <div className="row">
      <div className="col col-is-flush ns-is-offset-4">
        <button
          className="lead-1 ns-lead-2 btn btn-blue txt-uppercase txt-size-1"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    </div>
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
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
