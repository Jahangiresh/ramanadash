import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    colorsData: [],
    loading: false
}

export const fetchAllColors = createAsyncThunk("colors/getAPI", async () => {
    const response = await axios.get("https://newramana.azurewebsites.net/api/color");

    return response.data.data;
});


export const colorSlice = createSlice({
    name: "colors",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllColors.pending, (state, action) => {

            state.colorsData = action.payload
            state.loading = true
        })
            .addCase(fetchAllColors.fulfilled, (state, action) => {
                state.loading = false;
                state.colorsData = action.payload;
            })
            .addCase(fetchAllColors.rejected, (state, action) => {
                // state.loading = false
            })

    }
})

export const getAllColors = (state) => state.color.colorsData;
export const getLoading = (state) => state.color.loading
export default colorSlice.reducer