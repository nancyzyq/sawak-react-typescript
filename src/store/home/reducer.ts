import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface HomeState {
    toastMes: string,
    toastShow: boolean
}

const initialState = {
    toastMes: '',
    toastShow: false
} as HomeState

const homeSlice = createSlice({
    name: 'home',
    initialState,
    // initialState: {
    //     toastMes: '',
    //     toastShow: false
    // },
    reducers: {
        updateToastMessage: (state, action: PayloadAction<string>) => {
            state.toastMes = action.payload
        },
        updateToastShow: (state, action: PayloadAction<boolean>) => {
            state.toastShow = action.payload
        }
    }
})

export const {updateToastMessage, updateToastShow} = homeSlice.actions
export default homeSlice.reducer