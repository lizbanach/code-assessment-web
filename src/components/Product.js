import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => {
  return (
    <div className="row">
      <div className="col ns-col-is-4 col-is-12">
        image
      </div>
      <div className="col ns-col-is-4 col-is-6">
        <h3>{title}</h3>
        <p>{inventory} remaining</p>
      </div>
      <div className="col ns-col-is-4 col-is-6 txt-right">&#36;{price}</div>
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
