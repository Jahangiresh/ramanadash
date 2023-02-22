import React from "react";
import { useState } from "react";
import { Formik } from "formik";
import "../scss/productdetails.scss";
import penPng from "../assets/images/Vector.png";
import plusPng from "../assets/images/plus.png";
import aznPng from "../assets/images/azn.png";
import prodImg from "../assets/images/avt.jpg";
import { useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUpload } from "react-icons/ai";
const ProductDetails = () => {
  const [change, setChange] = useState(true);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {});
  return (
    <div className="productDetails">
      <div className="productDetails__images">
        <div className="productDetails__images__image">
          <img src={prodImg} alt="" />
        </div>
        <div className="productDetails__images__image">
          <img src={prodImg} alt="" />
        </div>
        <div className="productDetails__images__image">
          <img src={prodImg} alt="" />
        </div>
        <div className="productDetails__images__image">
          <img src={prodImg} alt="" />
        </div>
        <div className="productDetails__images__image">
          <img src={prodImg} alt="" />
        </div>
      </div>
      <div className="productDetails__input">
        <input
          className="productDetails__input__inp"
          type="file"
          name=""
          id=""
        />
      </div>
      <div className="productDetails__add">
        <h1>edit product</h1>
        <div className="productDetails__add__row row">
          <div className="productDetails__add__row__left col-6">
            <label htmlFor="">title:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Desc:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Keywords:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Number:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Size:</label>
            <select name="size" id="size">
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
            </select>
          </div>
          <div className="productDetails__add__row__right col-6">
            <label htmlFor="">Category:</label>
            <select name="category" id="category">
              <option value="footwear">footwear</option>
              <option value="shirt">shirt</option>
              <option value="pants">pants</option>
              <option value="caps">caps</option>
            </select>
            <label htmlFor="">Price:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Material:</label>
            <select name="material" id="material">
              <option value="leather">leather</option>
              <option value="faux">faux</option>
              <option value="satin">satin</option>
            </select>
            <label htmlFor="">Color:</label>

            <select name="color" id="color">
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="black">black</option>
            </select>
            <label htmlFor="">Men/Women:</label>

            <select name="gender" id="gender">
              <option value="men">men</option>
              <option value="women">women</option>
            </select>
          </div>
        </div>
      </div>
      <div className="button">
        <button>save</button>
      </div>
    </div>
    // <div className="productdetails">
    //   <div className="productdetails__images">
    //     <div className="productdetails__images__image">
    //       <img
    //         src="https://i.pinimg.com/originals/cc/f5/66/ccf56662158c2d0c6cff1a6eee971628.png"
    //         alt=""
    //       />
    //     </div>{" "}
    //     <div className="productdetails__images__image">
    //       <img
    //         src="https://i.pinimg.com/originals/cc/f5/66/ccf56662158c2d0c6cff1a6eee971628.png"
    //         alt=""
    //       />
    //     </div>{" "}
    //     <div className="productdetails__images__image">
    //       <img
    //         src="https://i.pinimg.com/originals/cc/f5/66/ccf56662158c2d0c6cff1a6eee971628.png"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <label className="custom-file-upload">
    //     <input type="file" accept="image/*" />
    //     {/* <span> Upload image</span> <AiOutlineUpload /> */}
    //   </label>
    //   <div className="productdetails__title">
    //     <h3 className="title__h">name:</h3>
    //     {change && change ? (
    //       <input
    //         style={{ marginLeft: "20px" }}
    //         className="edit_inputs "
    //         type="text"
    //         defaultValue={"deri ayaqqabi"}
    //         readOnly
    //       />
    //     ) : (
    //       <input
    //         style={{ marginLeft: "20px" }}
    //         className="edit_inputs"
    //         type="text"
    //         defaultValue={"deri ayaqqabi"}
    //       />
    //     )}
    //     {change && change ? (
    //       <BsPencil
    //         className="pencil__class"
    //         onClick={() => setChange((value) => !value)}
    //       />
    //     ) : (
    //       //   <button onClick={() => setChange((value) => !value)}> change</button>
    //       <BsPencil
    //         className="text-success pencil__class"
    //         onClick={() => setChange((value) => !value)}
    //       />
    //     )}
    //   </div>
    //   <div className="productdetails__title">
    //     <h3 className="title__h ">price:</h3>
    //     <input
    //       className="edit_inputs mx-4"
    //       type="number"
    //       defaultValue={200}
    //     />{" "}
    //     azn
    //     {/* <img src={aznPng} alt="" /> */}
    //   </div>
    //   <div className="productdetails__title">
    //     <h3 className="title__h m-0">quantity:</h3>
    //     <input
    //       style={{ marginLeft: "14px" }}
    //       className="edit_inputs"
    //       type="number"
    //       defaultValue={123}
    //     />
    //   </div>{" "}
    //   <div className="productdetails__title">
    //     <h3 className="title__h m-0">category:</h3>
    //     <select
    //       style={{ marginLeft: "8px" }}
    //       className="form-select"
    //       aria-label="Default select example"
    //     >
    //       <option selected>ayaqqabi</option>
    //       <option value="koynek">koynek</option>
    //       <option value="paltar">paltar</option>
    //     </select>
    //   </div>
    //   <div className="productdetails__title">
    //     <h3 className="title__h m-0">isActive:</h3>
    //     <select
    //       style={{ marginLeft: "15px" }}
    //       onChange={(e) => setIsActive(e.target.value)}
    //       className="form-select"
    //       aria-label="Default select example"
    //     >
    //       <option value={true}>active</option>
    //       <option value={false}>deactive</option>
    //     </select>
    //     {isActive ? "" : <button className="bg-danger">delete</button>}
    //   </div>
    //   <button className="bg-success  text-light  ">save</button>
    // </div>
  );
};

export default ProductDetails;
