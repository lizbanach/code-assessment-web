import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const fetchProducts = () => {
  fetch('http://tech.work.co/shopping-cart/products.json')
  .then(res => res.json()) // response type
  .then(data => console.log(data)) // log the data
}

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  fetchProducts()
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const removeFromCart = productId => dispatch => {
  dispatch({
    type: types.REMOVE_FROM_CART,
    productId
  })
}

export const increaseQuantity = productId => dispatch => {
  dispatch({
    type: types.INCREASE_QUANTITY,
    productId
  })
}

export const decreaseQuantity = productId => dispatch => {
  dispatch({
    type: types.DECREASE_QUANTITY,
    productId
  })
}

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
