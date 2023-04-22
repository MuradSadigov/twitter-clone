import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: ''
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostId: (state, action) => {
      state.id = action.payload
    }
  }
})
export const { setPostId } = postSlice.actions

export default postSlice.reducer
