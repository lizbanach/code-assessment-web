import { OPEN_CART, CLOSE_CART, ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_FAILURE, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  isOpen: false
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      return state.filter(id => id !== action.productId)
    default:
      return state
  }
}

const toggleCart = (state, action) => {
  switch (action.type) {
    case OPEN_CART:
      return true
    case CLOSE_CART:
      return false
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      return { ...state,
        [action.productId]: 0
      }
    case INCREASE_QUANTITY:
      return { ...state,
        [action.productId]: (state[action.productId] || 0) + 1
      }
    case DECREASE_QUANTITY:
      return { ...state,
        [action.productId]: (state[action.productId] || 0) - 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        isOpen: toggleCart(state.isOpen, action)
      }
  }
}

export default cart
