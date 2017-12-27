import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {
  return <h1>Hello WP-API!</h1>
}

Header.PropTypes = {
  src: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string
}

export default Header
