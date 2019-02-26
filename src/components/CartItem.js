import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ price, inventory, title }) => (
  <div>
    <div>{title} - &#36;{price}</div>
  </div>
)

CartItem.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default CartItem
