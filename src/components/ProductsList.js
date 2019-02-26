import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <div>
    <div className="row">{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node
}

export default ProductsList
