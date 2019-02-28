import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ productTitle, price, onAddToCartClicked, onRemoveClicked, onIncreaseClicked, onDecreaseClicked }) => (
  <div className="col col-is-12 col-is-flush lead-1">
    <div>{productTitle} - &#36;{price}</div>
      <button
        onClick={onRemoveClicked}>
        Remove
      </button>
    <div>
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
