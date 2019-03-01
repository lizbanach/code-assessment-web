import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ productTitle, price, onAddToCartClicked, onRemoveClicked, onIncreaseClicked, onDecreaseClicked }) => (
  <div className="row">
  <div className="col col-is-4 col-is-flush">
    image
  </div>
  <div className="col col-is-8 col-is-flush">
    <p>{productTitle}</p>
    <p>&#36;{price}</p>
    <button
      onClick={onRemoveClicked}>
      Remove
    </button>
    <button
      onClick={onIncreaseClicked}>
      +
    </button>
    <button
      onClick={onDecreaseClicked}>
        -
    </button>
  </div>
</div>
)

CartItem.propTypes = {
  productTitle: PropTypes.string.isRequired,
  price: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveClicked: PropTypes.func,
  onIncreaseClicked: PropTypes.func,
  onDecreaseClicked: PropTypes.func
}

export default CartItem
