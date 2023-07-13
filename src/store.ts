import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blog.slice'
export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})
// Lấy rootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
