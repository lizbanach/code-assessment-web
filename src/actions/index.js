import fetch from 'cross-fetch'
import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const fetchProducts = () => dispatch => {
  return fetch('http://tech.work.co/shopping-cart/products.json')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return response.error
    })
    .then(json => dispatch(receiveProducts(json)))
}

const receiveProducts = json => ({
  type: types.RECEIVE_PRODUCTS,
  products: json,
  receivedAt: Date.now()
})

export const getAllProducts = () => (dispatch) => {
  dispatch(fetchProducts())
}

const increaseItem = (productId) => ({
  type: types.INCREASE_QUANTITY,
  productId
})

export const increaseQuantity = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(increaseItem(productId))
  }
}

const decreaseItem = (productId) => ({
  type: types.DECREASE_QUANTITY,
  productId
})

export const decreaseQuantity = productId => (dispatch, getState) => {
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(decreaseItem(productId))
  }
}

const addItem = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addItem(productId))
  }
}

const removeItem = (productId, quantity) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  quantity
})

export const removeFromCart = productId => (dispatch, getState) => {
  const quantity = getState().cart.quantityById[productId]
  dispatch(removeItem(productId, quantity))
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

const openModal = () => ({
  type: types.OPEN_CART
})

const closeModal = () => ({
  type: types.CLOSE_CART
})

export const openCart = () => (dispatch, getState) => {
  dispatch(openModal())
  console.log(getState().cart)
}

export const closeCart = () => (dispatch, getState) => {
  dispatch(closeModal())
  console.log(getState().cart)
}
