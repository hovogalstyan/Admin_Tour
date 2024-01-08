import {createReducer} from "@reduxjs/toolkit";
import {categoriesListRequest} from "../actions/categories";

const initialState = {
    categoriesList: [],
}

export const categories = createReducer(initialState, (builder) => {
    builder
        .addCase(categoriesListRequest.fulfilled, (state, action) => {
            const { categories } = action.payload;
            state.categoriesList = categories;
        })
})