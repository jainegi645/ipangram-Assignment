import { configureStore } from '@reduxjs/toolkit'
import dateSelectedSlice from './dateSelectedSlice'

export const store = configureStore({
  reducer: {
    dateSelected:dateSelectedSlice,
  },
})