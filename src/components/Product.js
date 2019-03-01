import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => {
  return (
    <div className="row">
      <div className="col col-is-flush ns-col-is-4 col-is-12">
        image
      </div>
      <div className="col col-is-flush ns-col-is-4 col-is-6">
        <h2>{title}</h2>
        <p className="txt-uppercase txt-gray txt-light txt-size-1 lead-half">{inventory} remaining</p>
      </div>
      <div className="col col-is-flush ns-col-is-4 col-is-6 txt-right">&#36;{price}</div>
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
