import {createReducer} from "@reduxjs/toolkit";
import { destinationsListRequest } from "../actions/destinations";

const initialState = {
    destinationsList: [],
}

export const destinations = createReducer(initialState, (builder) => {
    builder
        .addCase(destinationsListRequest.fulfilled, (state, action) => {
            const { destinations } = action.payload;
            state.destinationsList = destinations;
        })
})