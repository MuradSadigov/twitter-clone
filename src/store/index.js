import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import postSlice from './postSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    post: postSlice
  }
})
