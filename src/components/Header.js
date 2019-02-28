import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ onOpenCartClicked, title }) => (
  <div>
    <div>{title}</div>
    <button
      onClick={onOpenCartClicked}>
      cart
    </button>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onOpenCartClicked: PropTypes.func.isRequired
}

export default Header
