import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, onAddToCartClicked }) => {
  const imageTitle = title.toLowerCase()
  const image = '/img/image-' + imageTitle + '.jpg'
  return (
    <div className="row">
      <div className="col lg-col-is-4 col-is-12 txt-center">
        <img className="product-image" alt={title} src={image} />
      </div>
      <div className="col col-is-6 lg-col-is-4">
      <div className="lead-1 lead-bottom-1">
        <h2>{title}</h2>
        <p className="txt-uppercase txt-gray txt-light txt-size-1 lead-half">{inventory} remaining</p>
        <button
          className="btn btn-blue txt-uppercase txt-size-1 ns-lead-2 lead-1"
          onClick={onAddToCartClicked}
          disabled={inventory > 0 ? '' : 'disabled'}>
          {inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
        </div>
      </div>
      <div className="col lg-col-is-4 col-is-6 txt-right">
        <div className="lead-1">
          <p>&#36;{price}</p>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default Product
