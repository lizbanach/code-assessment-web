import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => {
  const imageTitle = title.toLowerCase()
  const image = '/img/image-' + imageTitle + '.jpg'
  return (
    <div className="row">
      <div className="col col-is-flush ns-col-is-4 col-is-12 txt-center">
        <img className="product-image" alt={title} src={image} />
      </div>
      <div className="col col-is-flush ns-col-is-4">
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
