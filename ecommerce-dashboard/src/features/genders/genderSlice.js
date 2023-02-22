import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    gendersData: [],
    loading: false
}

export const fetchAllGenders = createAsyncThunk("genders/getAPI", async () => {
    const response = await axios.get("https://newramana.azurewebsites.net/api/gender");
    return response.data.data;
});

export const saveNewGender = createAsyncThunk("genders/getApi", async (payload) => {
    const response = await axios.post("https://newramana.azurewebsites.net/api/gender", payload)
    return response.data
})
export const genderSlice = createSlice({
    name: "genders",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllGenders.pending, (state, action) => {

            state.gendersData = action.payload
            state.loading = true
        })
            .addCase(fetchAllGenders.fulfilled, (state, action) => {
                state.loading = false;
                state.gendersData = action.payload;
            })
            .addCase(fetchAllGenders.rejected, (state, action) => {
                // state.loading = false
            })
            .addCase(saveNewGender.pending, (state) => {
                state.loading = true
            })
            .addCase(saveNewGender.fulfilled, (state) => {
                state.loading = false
            })
    }
})

export const getAllGenders = (state) => state.gender.gendersData;
export const getLoading = (state) => state.gender.loading
export default genderSlice.reducer