import { createSlice } from '@reduxjs/toolkit'
import { BookingItem } from '../../../interfaces';
import { PayloadAction } from '@reduxjs/toolkit';

type BookState = {
	bookItems: BookingItem[]
}

const initialState: BookState = {
	bookItems: []
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBooking: (state, action:PayloadAction<BookingItem>) => {
        state.bookItems = [action.payload]
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
    },
    removeBooking: (state, action:PayloadAction<BookingItem>) => {
        const remainItems = state.bookItems.filter(obj => {
            return obj.id !== action.payload.id
        })
        state.bookItems = remainItems
    }
}
})

// Action creators are generated for each case reducer function
export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer