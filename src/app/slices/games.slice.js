import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getGames = createAsyncThunk('games/getGames', async ({limit, category, page}, {rejectWithValue})=>{
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


const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: {
        [getGames.pending]: (state, action)=>{
            state.isLoading = true
            state.error = ''
        },
        [getGames.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.error = ''
            state.games = [...state.games, ...action.payload]
        },
        [getGames.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default gamesSlice.reducer
export const {reset} = gamesSlice.actions
