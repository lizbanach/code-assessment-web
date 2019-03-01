import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ quantity, productTitle, price, onAddToCartClicked, onRemoveClicked, onIncreaseClicked, onDecreaseClicked }) => {
  const imageTitle = productTitle.toLowerCase()
  const image = '/img/image-' + imageTitle + '.jpg'
  return (
      <div className="row">
      <div className="col col-is-4 col-is-flush">
        <img className="cart-image" alt={productTitle} src={image} />
      </div>
      <div className="col col-is-8 col-is-flush">
        <p>{productTitle}</p>
        <p className="txt-gray txt-size-1">&#36;{price}</p>
        <p className="txt-size-1">
          <button className="btn btn-remove"
            onClick={onRemoveClicked}>
            Remove
          </button>
        </p>
        <div className="col col-is-12 col-is-flush">
        <button
          className="btn btn-blue"
          onClick={onIncreaseClicked}>
          +
        </button>
        {quantity}
        <button
          className="btn btn-blue"
          onClick={onDecreaseClicked}>
            -
        </button>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  productTitle: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveClicked: PropTypes.func,
  onIncreaseClicked: PropTypes.func,
  onDecreaseClicked: PropTypes.func
}

export default CartItem
