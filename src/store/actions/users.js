import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../Api';
import Account from "../../helpers/Account";

export const userLoginRequired = createAsyncThunk('user/login', async (arg = {}, thunkAPI) => {
    try {
        const {data} = await Api.login(arg);
        const {token, status, ...user} = data;
        Account.setToken(token)
        Account.setUser(user)
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

export const userProfileRequired = createAsyncThunk('user/profile', async (arg, thunkAPI) => {
    try {
        const {data} = await Api.profile();
        const {profile} = data;

        return profile;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

export const sendEmailForgotPasswordRequired = createAsyncThunk("user/sendEmailForgotPasswordRequired", async (arg = {}, thunkAPI) => {
    try{
        const { data } = await Api.sendEmailForgotPassword(arg.email);
        return data;
    }catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
})

export const sendCodeForgotPasswordRequired = createAsyncThunk("user/sendCodeForgotPasswordRequired", async (arg = {}, thunkAPI) => {
    try{
        const { data } = await Api.sendCodeForgotPassword(arg.code);
        return data;
    }catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
})


export const updateForgotPasswordRequired = createAsyncThunk("user/updateForgotPasswordRequired", async (arg = {}, thunkAPI) => {
    try{
        const { data } = await Api.updateForgotPassword(arg.password);
        return data;
    }catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
})
