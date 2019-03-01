import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg';
import { getCartProducts } from '../reducers'
import { connect } from 'react-redux'

const Header = ({ products, onOpenCartClicked, title }) => {

  const hasProducts = products.length > 0
  var cartTotal = products.reduce(function(prev, cur) {
    return prev + cur.quantity;
  }, 0);
  const cartStatus = hasProducts ? (
    'Your cart ' + '(' + cartTotal + ')'
  ) : (
    'Your cart is empty'
  )
  return (
    <div className="navigation">
      <div className="row">
        <div className="col col-is-12 lg-col-is-9 ns-col-is-flush">
          <h1 className="txt-bold">{title}</h1>
        </div>
        <div className="col col-is-12 ns-col-is-3 lg-txt-right">
          <button
            className="btn btn-cart"
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
