import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  orderData: [],
  status: null,
};

export const fetchAllOrders = createAsyncThunk("orders/getAPI", async () => {
  const resp = await axios.get(
    "https://newramanaapplication.azurewebsites.net/api/shop/orders"
  );
  return resp.data;
});

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async (payload) => {
    await axios.put(
      "https://newramanaapplication.azurewebsites.net/api/Shop",
      payload
    );
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.status = "success";
        state.orderData = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.status = "fail";
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(updateOrder.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.status = "fail";
      });
  },
});

export const getOrder = (state) => state.order.orderData;
export const getStatus = (state) => state.order.status;
export default orderSlice.reducer;
