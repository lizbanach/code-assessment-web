import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg';

const Header = ({ onOpenCartClicked, title }) => (
  <div className="navigation">
    <div className="row">
      <div className="col col-is-10">
        <h1 className="txt-bold">{title}</h1>
      </div>
      <div className="col col-is-2">
        <button
          onClick={onOpenCartClicked}>
          <SVG src="svg/cart.svg"/>
          Cart
        </button>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onOpenCartClicked: PropTypes.func.isRequired
}

export default Header
