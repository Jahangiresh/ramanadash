import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productsData: [],
  loading: false,
  isDeleting: false,
};

export const fetchAllProducts = createAsyncThunk(
  "products/getAPI",
  async () => {
    const response = await axios.get(
      "https://newramana.azurewebsites.net/api/product"
    );
    return response.data.data;
  }
);

export const saveNewProduct = createAsyncThunk(
  "products/getApi",
  async (payload) => {
    const response = await axios.post(
      "http://localhost:3000/advocates",
      payload
    );
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteApi",
  async (payload) => {
    const response = await axios.delete(
      `https://newramana.azurewebsites.net/api/product/${payload}`
    );
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.productsData = action.payload;
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        // state.loading = false
      })
      .addCase(saveNewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveNewProduct.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isDeleting = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isDeleting = true;
      });
  },
});

export const getAllProducts = (state) => state.product.productsData;
export const getLoading = (state) => state.product.loading;
export const getIsDeleting = (state) => state.product.isDeleting;
export default productSlice.reducer;
