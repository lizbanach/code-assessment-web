import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

const CartItem = ({ quantity, productTitle, price, onAddToCartClicked, onRemoveClicked, onIncreaseClicked, onDecreaseClicked }) => {
  const imageTitle = productTitle.toLowerCase()
  const image = '/img/image-' + imageTitle + '.jpg'
  return (
    <div>

      <div className="row lead-1">
        <div className="col col-is-6 col-is-flush txt-center">
          <img className="cart-image" alt={productTitle} src={image} />
        </div>
        <div className="col col-is-6 col-is-flush">
          <p className="lead-half">{productTitle}</p>
          <p className="txt-gray txt-size-1">&#36;{price}</p>
          <p className="txt-size-1">
            <button className="btn btn-remove"
              onClick={onRemoveClicked}>
              Remove
              </button>
          </p>
        </div>
      </div>

      <div className="row row-is-centered">
        <div className="col">
          <button
            className="btn btn-decrease"
            onClick={onDecreaseClicked}>
            <SVG src="svg/minus.svg"/>
          </button>
          <div className="quantity">
            {quantity}
          </div>
          <button
            className="btn btn-increase"
            onClick={onIncreaseClicked}>
            <SVG src="svg/plus.svg"/>
          </button>
        </div>
      </div>

    </div>
  )
}

CartItem.propTypes = {
  productTitle: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveClicked: PropTypes.func,
  onIncreaseClicked: PropTypes.func,
  onDecreaseClicked: PropTypes.func
}

export default CartItem
