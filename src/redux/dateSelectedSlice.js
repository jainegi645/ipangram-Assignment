import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
    selectedDate: moment().format(),
}

export const dateSelectedSlice = createSlice({
    name: 'selectedDate',
    initialState,
    reducers: {

        updateSelectedDate: (state, action) => {
            state.selectedDate = action.payload
        },
        updateTimeZone: (state, action) => {
            state.selectedDate = action.payload
        },
      
    },
})

// Action creators are generated for each case reducer function
export const { updateSelectedDate,updateTimeZone } = dateSelectedSlice.actions

export default dateSelectedSlice.reducer