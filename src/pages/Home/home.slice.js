import { createAsyncThunk } from '@reduxjs/toolkit'
import categoryApi from 'src/api/category.api'
import { payloadCreator } from 'src/utils/helper'
import productApi from 'src/api/product.api'

export const getCategories = createAsyncThunk(
  'home/getCategories',
  payloadCreator(categoryApi.getCategories)
)

export const getProducts = createAsyncThunk(
  'home/getProducts',
  payloadCreator(productApi.getProducts)
)
