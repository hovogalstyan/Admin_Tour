import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../Api';
import Account from "../../helpers/Account";

export const userLoginRequired = createAsyncThunk('user/login', async (arg = {}, thunkAPI) => {
    try {
        const {data} = await Api.login(arg);
        const {token, status, ...user} = data;
        Account.setToken(token)
        Account.getUser(user)
        return user;
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
