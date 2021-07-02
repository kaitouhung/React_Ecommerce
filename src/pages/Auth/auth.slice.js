import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCretor } from 'src/utils/helper'

export const register = createAsyncThunk(
  'auth/register',
  payloadCretor(authApi.register)
)

export const login = createAsyncThunk(
  'auth/login',
  payloadCretor(authApi.login)
)

export const logout = createAsyncThunk(
  'auth/logout',
  payloadCretor(authApi.logout)
)



const handleAuthFullfilled = (state, action) => {
  const { user, access_token } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, JSON.stringify(access_token))
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {}
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFullfilled,
    [login.fulfilled]: handleAuthFullfilled,
    [logout.fulfilled]: state => {
      state.profile = {}
      localStorage.removeItem(LocalStorage.user)
      localStorage.removeItem(LocalStorage.accessToken)
    }
  }
})

const authReducer = auth.reducer
export default authReducer
