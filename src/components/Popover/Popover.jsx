import React from 'react'
import { Fragment } from 'react'
import * as S from './popover.style'
import { PropTypes } from 'prop-types'

Popover.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default function Popover({ active, children }) {
  return (
    <Fragment>
      {active && (
        <S.Drawer>
          <S.PopoverArrow />
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </Fragment>
  )
}
