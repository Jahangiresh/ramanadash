import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    materialsData: [],
    loading: false
}

export const fetchAllMaterials = createAsyncThunk("materials/getAPI", async () => {
    const response = await axios.get("https://newramana.azurewebsites.net/api/material");

    return response.data.data;
});


export const materialSlice = createSlice({
    name: "materials",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllMaterials.pending, (state, action) => {

            state.materialsData = action.payload
            state.loading = true
        })
            .addCase(fetchAllMaterials.fulfilled, (state, action) => {
                state.loading = false;
                state.materialsData = action.payload;
            })
            .addCase(fetchAllMaterials.rejected, (state, action) => {
                // state.loading = false
            })

    }
})

export const getAllMaterials = (state) => state.material.materialsData;
export const getLoading = (state) => state.material.loading
export default materialSlice.reducer