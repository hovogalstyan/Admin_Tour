import {createAsyncThunk} from "@reduxjs/toolkit";
import { Api } from "../Api";

export const toursListRequest = createAsyncThunk('tours/toursListRequest', async (payload = {}, thunkAPI) =>{
    try{
        const { data } = await Api.destinationsList();
        return data;
    }catch(e){
        return thunkAPI.rejectWithValue(e.response.data);
    }
})