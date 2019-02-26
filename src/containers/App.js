import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Acme Store</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <ProductsContainer />
  </div>
)

const Cart = () => (
  <div>
    <CartContainer />
  </div>
)

export default App
