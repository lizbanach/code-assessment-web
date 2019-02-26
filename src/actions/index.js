import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

// const fetchProducts = () => {
//   fetch('http://tech.work.co/shopping-cart/products.json')
//     .then(res => res.json()) // response type
//     .then(data => console.log(data)) // log the data
// }

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const increaseItem = (productId, quantity) => ({
  type: types.INCREASE_QUANTITY,
  productId,
  quantity
})

export const increaseQuantity = productId => (dispatch, getState) => {
  const quantity = getState().cart.quantityById[productId]
  dispatch(increaseItem(productId, quantity))
}

const decreaseItem = (productId, quantity) => ({
  type: types.DECREASE_QUANTITY,
  productId,
  quantity
})

export const decreaseQuantity = productId => (dispatch, getState) => {
  const quantity = getState().cart.quantityById[productId]
  dispatch(decreaseItem(productId, quantity))
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
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
  const {
    cart
  } = getState()

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
