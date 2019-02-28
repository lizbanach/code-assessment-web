import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => {
  return (
    <div className="row">
      <div className="col">
        image
      </div>
      <div className="col">
        <h3>{title}</h3>
        <p>{inventory} remaining</p>
      </div>
      <div className="col txt-right">&#36;{price}</div>
    </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product
