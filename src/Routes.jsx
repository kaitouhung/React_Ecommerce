import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import User from './pages/User/User'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import CartLayout from './layouts/CartLayout/CartLayout'
import Cart from './pages/Cart/Cart'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path={path.home} exact>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
        <Route path={path.productDetail} exact>
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        </Route>
        <Route path={path.login}>
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Login />
            </RegisterLayout>
          </UnauthenticatedGuard>
        </Route>
        <Route path={path.register}>
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Register />
            </RegisterLayout>
          </UnauthenticatedGuard>
        </Route>
        <Route path={path.user}>
          <AuthenticatedGuard>
            <MainLayout>
              <User />
            </MainLayout>
          </AuthenticatedGuard>
        </Route>
        <Route path={path.cart}>
          <AuthenticatedGuard>
            <CartLayout>
              <Cart />
            </CartLayout>
          </AuthenticatedGuard>
        </Route>
        <Route path={path.notFound}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}
