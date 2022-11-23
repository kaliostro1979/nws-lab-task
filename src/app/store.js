import {combineReducers, configureStore} from "@reduxjs/toolkit";
import imagesSlice from "./slices/images.slice";
import categorySlice from "./slices/category.slice";

const rootReducer = combineReducers({
    images: imagesSlice,
    categories: categorySlice
})

export const store = configureStore({
    reducer: {
        main: rootReducer
    }
})