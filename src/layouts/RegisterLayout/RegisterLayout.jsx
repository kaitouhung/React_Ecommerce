import React from 'react'
import Footer from 'src/components/Footer/Footer'
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister'
import { PropTypes } from 'prop-types'

RegisterLayout.prototype = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default function RegisterLayout(props) {
  const { children, title } = props
  return (
    <div>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </div>
  )
}
