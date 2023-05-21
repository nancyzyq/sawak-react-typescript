import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IIngredient {
    _id?: string,
    id: string,
    name: string,
    type: string,
    created?: Date,
    updated?: Date
}

export interface ICategory {
    _id?: string
    id : string,
    name: string,
    created?: Date,
    updated?: Date

}

export interface IMenuItem {
    _id: string,
    id: string,
    name: string,
    price: string,
    number: string,
    type: ICategory,
    ingredients: IIngredient[],
    created?: Date,
    updated?: Date

}

interface MenuState {
    menu: IMenuItem[],
    filteredMenu: IMenuItem[],
    menuItem: IMenuItem | null,
    ingredients: IIngredient[],
    categories: ICategory[]
}

const initialState = {
    menu: [],
    filteredMenu: [],
    menuItem: null,
    ingredients: [],
    categories: []
} as MenuState

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        updateMenu: (state, action: PayloadAction<Array<IMenuItem>>) => {
            state.menu = action.payload
        },
        updateFilteredMenu: (state, action: PayloadAction<Array<IMenuItem>>) => {
            state.filteredMenu = action.payload
        },
        updateMenuItem: (state, action: PayloadAction<IMenuItem>) => {
            state.menuItem = action.payload
        },
        updateIngredients: (state, action: PayloadAction<Array<IIngredient>>) => {
            state.ingredients = action.payload
        },
        updateCategories: (state, action: PayloadAction<Array<ICategory>>) => {
            state.categories = action.payload
        }
    }

})

// export default menuReducer
export const { updateMenu, updateFilteredMenu, updateMenuItem, updateIngredients, updateCategories } = menuSlice.actions
export default menuSlice.reducer