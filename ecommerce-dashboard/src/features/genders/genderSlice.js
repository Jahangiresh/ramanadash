import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    gendersData: [],
    loading: false
}

export const fetchAllGenders = createAsyncThunk("genders/getAPI", async () => {
    const response = await axios.get("http://irp.ramanacastle.com/api/gender")
    return response.data.data;
});

export const saveNewGender = createAsyncThunk("genders/postApi", async (payload) => {
    const response = await axios.post("http://irp.ramanacastle.com/api/gender/store", payload)
    return response.data
})
export const updateGender = createAsyncThunk("genders/putApi", async (payload) => {
    const response = await axios.post("http://irp.ramanacastle.com/api/gender/update/2", payload)
    return response.data
})
export const deleteGender = createAsyncThunk("genders/deleteApi", async (payload) => {
    const response = await axios.post("http://irp.ramanacastle.com/api/delete/gender/1", payload)
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