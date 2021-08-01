import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unauthorize } from 'src/pages/Auth/auth.slice'
import { path } from 'src/constants/path'
import { useHistory } from 'react-router-dom'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { getCartPurchases } from 'src/pages/Cart/cart.slice'

export default function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const history = useHistory()
  const authenticated = useAuthenticated()

  // lỗi 401 là token hết thời hạn => server ko chấp nhận token này
  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      history.push(path.login)
    }
  }, [dispatch, status, history])

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [dispatch, authenticated])
  return null
}
