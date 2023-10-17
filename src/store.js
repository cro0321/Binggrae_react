import { configureStore, createSlice } from "@reduxjs/toolkit";

let language = createSlice({
    name: "language",
    initialState: localStorage.getItem('language') || 'kr',
    reducers: {
      setLanguage: (state, action) => action.payload,
    }
});
export const { setLanguage } = language.actions;

export default configureStore({
    reducer : {
        language: language.reducer,
    }
});