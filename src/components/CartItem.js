import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ price, inventory, title, onRemoveClicked }) => (
  <div>
    <div>{title} - &#36;{price}</div>
    <button
      onClick={onRemoveClicked}>
      Remove
    </button>
  </div>
)

CartItem.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  onRemoveClicked: PropTypes.func
}

export default CartItem
