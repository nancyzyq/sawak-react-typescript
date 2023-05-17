import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Ingredient {
    _id?: string,
    id: string,
    name: string,
    type: string,
    created?: Date,
    updated?: Date
}

export interface Category {
    _id?: string
    id : string,
    name: string,
    created?: Date,
    updated?: Date

}

export interface MenuItem {
    _id: string,
    id: string,
    name: string,
    price: string,
    number: string,
    type: Category,
    ingredients: Ingredient[]

}

interface MenuState {
    menu: Array<Object>,
    filteredMenu: Array<Object>,
    menuItem: Object,
    ingredients: Array<Object>,
    categories: Array<Object>
}

const initialState = {
    menu: [],
    filteredMenu: [],
    menuItem: {},
    ingredients: [],
    categories: []
} as MenuState

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    // initialState: {
    //     menu: [],
    //     filteredMenu: [],
    //     menuItem: {},
    //     ingredients: [],
    //     categories: []
    // },
    reducers: {
        updateMenu: (state, action: PayloadAction<Array<Object>>) => {
            state.menu = action.payload
        },
        updateFilteredMenu: (state, action: PayloadAction<Array<Object>>) => {
            state.filteredMenu = action.payload
        },
        updateMenuItem: (state, action: PayloadAction<Object>) => {
            state.menuItem = action.payload
        },
        updateIngredients: (state, action: PayloadAction<Array<Object>>) => {
            state.ingredients = action.payload
        },
        updateCategories: (state, action: PayloadAction<Array<Object>>) => {
            state.categories = action.payload
        }
    }

})

// export default menuReducer
export const { updateMenu, updateFilteredMenu, updateMenuItem, updateIngredients, updateCategories } = menuSlice.actions
export default menuSlice.reducer