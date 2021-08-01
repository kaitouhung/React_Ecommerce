import React from 'react'
import HeaderCart from 'src/components/HeaderCart/HeaderCart'
import Footer from 'src/components/Footer/Footer'
import { PropTypes } from 'prop-types'

CartLayout.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default function CartLayout({ children }) {
  return (
    <div>
      <HeaderCart />
      {children}
      <Footer />
    </div>
  )
}
