import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import usePopover from 'src/hooks/usePopover'
import { logout } from 'src/pages/Auth/auth.slice'
import Popover from '../Popover/Popover'
import * as S from './navbar.style'
export default function Navbar() {
  const authenticated = useAuthenticated()
  const profile = useSelector(state => state.auth.profile)
  const { activePopover, showPopover, hidePopover } = usePopover()
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://cf.shopee.vn/file/cb3886f25384c1203482fa59bf62f515_tn"></S.UserImage>
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                <S.UserButton onClick={handleLogout}>Đăng suất</S.UserButton>
              </Popover>
            </S.User>
          </li>
        )}
        {!authenticated && (
          <Fragment>
            <li>
              <S.NavLink to={path.register}>Đăng ký</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  )
}
