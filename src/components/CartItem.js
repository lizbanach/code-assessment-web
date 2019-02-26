import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ price, inventory, title, onRemoveClicked, onIncreaseClicked, onDecreaseClicked }) => (
  <div>
    <div>{title} - &#36;{price}</div>
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
)

CartItem.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  onRemoveClicked: PropTypes.func,
  onIncreaseClicked: PropTypes.func,
  onDecreaseClicked: PropTypes.func
}

export default CartItem
