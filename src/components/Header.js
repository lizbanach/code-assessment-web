import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg';
import { getCartProducts } from '../reducers'
import { connect } from 'react-redux'

const Header = ({ products, onOpenCartClicked, title }) => {
  return (
    <div className="navigation">
      <div className="row">
        <div className="col col-is-9">
          <h1 className="txt-bold">{title}</h1>
        </div>
        <div className="col col-is-3">
          <button
            className="btn btn-cart"
            onClick={onOpenCartClicked}>
            <SVG src="svg/cart.svg"/>
            Cart
          </button>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string.isRequired,
  onOpenCartClicked: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state)
})

export default connect(
  mapStateToProps,
  { getCartProducts }
)(Header)
