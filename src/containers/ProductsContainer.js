import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, openCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import { getCartQuantity } from '../reducers'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import Header from '../components/Header'

const ProductsContainer = ({ cart, products, addToCart, openCart }) => {
  return (
    <main>
      <Header
        cart={cart}
        title={'Acme Store'}
        onOpenCartClicked={() => openCart()}
      >
      </Header>
      <ProductsList>
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)} />
        )}
      </ProductsList>
    </main>
  )
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  quantity: getCartQuantity(state),
  products: getVisibleProducts(state.products),
  cart: state.cart
})

export default connect(
  mapStateToProps,
  { addToCart, openCart }
)(ProductsContainer)
