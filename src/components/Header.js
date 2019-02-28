import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg';

const Header = ({ quantity, onOpenCartClicked, title }) => {
  const cartStatus = quantity > 0 ? quantity : 'Your cart is empty'
  return (
    <div className="navigation">
      <div className="row">
        <div className="col col-is-10">
          <h1 className="txt-bold">{title}</h1>
        </div>
        <div className="col col-is-2">
          <button
            className="btn"
            onClick={onOpenCartClicked}>
            <SVG src="svg/cart.svg"/>
            {cartStatus}
          </button>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onOpenCartClicked: PropTypes.func.isRequired
}

export default Header
