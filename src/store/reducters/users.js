import {createReducer} from '@reduxjs/toolkit';
import {
    sendEmailForgotPasswordRequired,
    userLoginRequired, userProfileRequired,
} from '../actions/users';
import Account from "../../helpers/Account";

const initialState = {
    profile: Account.getUser(),
    token: Account.getToken(),
    loading: false,
    errors: {},
    statusEditPassword: "",
};
export const users = createReducer(initialState, (builder) => {
    builder
        .addCase(userLoginRequired.pending, (state) => {
            state.loading = true;
        })
        .addCase(userLoginRequired.fulfilled, (state, action) => {
            const {token, ...user} = action.payload;
            state.loading = false;
            state.profile = user;
            state.token = token;
        })
        .addCase(userLoginRequired.rejected, (state, action) => {
            const {errors} = action.payload;
            state.loading = false;
            state.errors = errors;
        })
        .addCase(userProfileRequired.pending, (state) => {
            state.loading = true;
        })
        .addCase(userProfileRequired.fulfilled, (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        })
        .addCase(userProfileRequired.rejected, (state, action) => {
            state.tokenErrorsStatus = action.payload;
            state.loading = false;
        })
        .addCase(sendEmailForgotPasswordRequired.rejected, (state, action) => {
            console.log(action.payload)
        })
});
