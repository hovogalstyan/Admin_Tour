import {Api} from "../Api";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const categoriesListRequest = createAsyncThunk('categories/categoriesListRequest', async (payload = {}, thunkAPI) =>{
    try{
        const { data } = await Api.categoriesList();
        return data;
    }catch(e){
        return thunkAPI.rejectWithValue(e.response.data);
    }
})