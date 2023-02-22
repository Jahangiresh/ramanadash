import React from "react";
import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import Orders from "./pages/Orders";
import PageSettings from "./pages/PageSettings";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProductDetails from "./pages/ProductDetails";
import Genders from "./pages/Genders";
import { Provider } from "react-redux";
import { store } from "../src/features/store/index";
import CreateGender from "./pages/CreateGender";
import Categories from "./pages/Categories";
import CreateCategory from "./pages/CreateCategory";
import CreateProducts from "./pages/CreateProduct";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import About from "./pages/About";
import EditUser from "./pages/EditUser";
import Social from "./pages/Social";
import OrderDetails from "./pages/OrderDetails";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:id" element={<OrderDetails />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />
            <Route path="social" element={<Social />} />
            <Route path="users/:id" element={<EditUser />} />

            <Route path="login" element={<Login />} />
            <Route path="settings" element={<Settings />} />
            <Route path="stats" element={<Blank />} />
            <Route path="homepage" element={<PageSettings />} />
            <Route path="productdetails" element={<ProductDetails />} />
            <Route path="genders" element={<Genders />} />
            <Route path="creategender" element={<CreateGender />} />
            <Route path="categories" element={<Categories />} />
            <Route path="createcategory" element={<CreateCategory />} />
            <Route path="CreateProduct" element={<CreateProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
