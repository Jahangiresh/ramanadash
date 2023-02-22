import React from "react";
import "../scss/productdetails.scss";
import { useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, saveNewGender } from "../features/genders/genderSlice";
import * as yup from "yup";
const CreateGender = () => {
  const navigate = useNavigate();
  const validScheme = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Image: yup.mixed().required("Image is required"),
  });

  let dispatch = useDispatch();
  const loading = useSelector(getLoading);

  const submitHandler = (data) => {
    var req = new FormData();
    req.append("Name", data.Name);
    req.append("Image", data.Image);
    dispatch(saveNewGender(req));
    if (!loading) {
      navigate("/genders");
    }
  };

  return (
    <div className="productdetails">
      <Formik
        validationSchema={validScheme}
        initialValues={{
          Name: "",
          Image: null,
        }}
        onSubmit={submitHandler}
      >
        {({ touched, errors, setFieldValue }) => (
          <Form className="form">
            <div className="productdetails__title is-invalid">
              <label className="title__h" htmlFor="Name">
                Name
              </label>
              <Field name="Name" placeholder="Name" className="edit_inputs" />
            </div>
            <ErrorMessage
              name="Name"
              component="div"
              className="invalid-feedback"
            />
            <div className="productdetails__title is-invalid">
              <label className="title__h" htmlFor="Image">
                Image
              </label>
              <input
                type="file"
                name="Image"
                className="edit_inputs"
                onChange={(event) => {
                  setFieldValue("Image", event.currentTarget.files[0]);
                }}
              />
            </div>
            <ErrorMessage
              name="Image"
              component="div"
              className="invalid-feedback"
            />
            <button type="submit" className="bg-success  text-light">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
    // <div className="productdetails">
    //     <label className="custom-file-upload">
    //         <input type="file" accept="image/*" />
    //         {/* <span> Upload image</span> <AiOutlineUpload /> */}
    //     </label>
    //     <div className="productdetails__title">
    //         <h3 className="title__h">name:</h3>
    //         {change && change ? (
    //             <input
    //                 style={{ marginLeft: "20px" }}
    //                 className="edit_inputs "
    //                 type="text"
    //             />
    //         ) : (
    //             <input
    //                 style={{ marginLeft: "20px" }}
    //                 className="edit_inputs"
    //                 type="text"
    //             />
    //         )}
    //         {change && change ? (
    //             <BsPencil
    //                 className="pencil__class"
    //                 onClick={() => setChange((value) => !value)}
    //             />
    //         ) : (
    //             //   <button onClick={() => setChange((value) => !value)}> change</button>
    //             <BsPencil
    //                 className="text-success pencil__class"
    //                 onClick={() => setChange((value) => !value)}
    //             />
    //         )}
    //     </div>
    //     <div className="productdetails__title">
    //         <h3 className="title__h ">price:</h3>
    //         <input
    //             className="edit_inputs mx-4"
    //             type="number"
    //             defaultValue={200}
    //         />{" "}
    //         azn
    //         {/* <img src={aznPng} alt="" /> */}
    //     </div>
    //     <div className="productdetails__title">
    //         <h3 className="title__h m-0">quantity:</h3>
    //         <input
    //             style={{ marginLeft: "14px" }}
    //             className="edit_inputs"
    //             type="number"
    //             defaultValue={123}
    //         />
    //     </div>{" "}
    //     <div className="productdetails__title">
    //         <h3 className="title__h m-0">category:</h3>
    //         <select
    //             style={{ marginLeft: "8px" }}
    //             className="form-select"
    //             aria-label="Default select example"
    //         >
    //             <option selected>ayaqqabi</option>
    //             <option value="koynek">koynek</option>
    //             <option value="paltar">paltar</option>
    //         </select>
    //     </div>
    //     <div className="productdetails__title">
    //         <h3 className="title__h m-0">isActive:</h3>
    //         <select
    //             style={{ marginLeft: "15px" }}
    //             onChange={(e) => setIsActive(e.target.value)}
    //             className="form-select"
    //             aria-label="Default select example"
    //         >
    //             <option value={true}>active</option>
    //             <option value={false}>deactive</option>
    //         </select>
    //         {isActive ? "" : <button className="bg-danger">delete</button>}
    //     </div>
    //     <button className="bg-success  text-light  ">save</button>
    // </div>
  );
};

export default CreateGender;
