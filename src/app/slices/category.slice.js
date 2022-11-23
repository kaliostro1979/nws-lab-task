import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('categories/getCategories', async (_, {rejectWithValue})=>{
    try {
        return await fetch(`https://api.thecatapi.com/v1/categories`).then(res=>res.json()).then(data=>data)
    }catch (err){
        return rejectWithValue(err)
    }
})


const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getCategories.pending]: (state, action)=>{
            state.isLoading = true
            state.error = ''
        },
        [getCategories.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.error = ''
            state.categories = action.payload
        },
        [getCategories.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default categoriesSlice.reducer