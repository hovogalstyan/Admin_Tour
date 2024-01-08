import {createReducer} from "@reduxjs/toolkit";
import {toursListRequest} from "../actions/tours";

const initialState = {
    toursList: [],
}

export const tours = createReducer(initialState, (builder) => {
    builder
        .addCase(toursListRequest.fulfilled, (state, action) => {
            const { toures } = action.payload;
            state.toursList = toures;
        })
})