import { configureStore } from "@reduxjs/toolkit";
import genderReducer from "../genders/genderSlice";
import categoryReducer from "../categories/categorySlice";
import productReducer from "../products/productSlice";
import materialReducer from "../materials/materialSlice";
import colorReducer from "../colors/colorSlice";
import orderReducer from "../order/orderSlice";

export const store = configureStore({
  reducer: {
    gender: genderReducer,
    category: categoryReducer,
    product: productReducer,
    material: materialReducer,
    color: colorReducer,
    order: orderReducer,
  },
});
