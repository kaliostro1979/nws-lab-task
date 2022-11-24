import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getImages = createAsyncThunk('images/getImages', async ({limit, category, page=1}, {rejectWithValue})=>{
    try {
       return await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category}`)
           .then(res=>res.json())
           .then(data=>data)
   }catch (err){
       return rejectWithValue(err)
   }
})

const initialState = {
    images: [],
    isLoading: false,
    error: ''
};


const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: {
        [getImages.pending]: (state, action)=>{
            state.isLoading = true
            state.error = ''
        },
        [getImages.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.error = ''
            state.images = [...state.images, ...action.payload]
        },
        [getImages.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default imagesSlice.reducer
export const {reset} = imagesSlice.actions
