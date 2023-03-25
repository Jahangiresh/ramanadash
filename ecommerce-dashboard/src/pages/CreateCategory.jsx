import React, { useEffect } from "react";
import "../scss/productdetails.scss";
import { useNavigate } from "react-router-dom";
// import prodImg from "../assets/images/avt.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoading,
  saveNewCategory,
  fetchAllCategories,
  getAllCategories,
} from "../features/categories/categorySlice";
import * as yup from "yup";
const CreateCategory = () => {
  const navigate = useNavigate();
  const validScheme = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Image: yup.mixed().required("Image is required"),
  });

  let dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  const submitHandler = (data) => {
    var req = new FormData();
    req.append("Name", data.Name);
    req.append("Image", data.Image);
    req.append("ParentId", data.ParentId);
    dispatch(saveNewCategory(req));
    if (!loading) {
      navigate("/categories");
    }
  };

  return (
    <div className="productdetails">
      <Formik
        validationSchema={validScheme}
        initialValues={{
          Name: "",
          Image: null,
          ParentId: "",
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
              <label className="title__h" htmlFor="ParentId">
                Parent
              </label>
              <Field
                name="ParentId"
                placeholder="Parent"
                as="select"
                className="edit_inputs"
              >
                <option disabled>Select Parent Category</option>
                {categories &&
                  categories.map((e) => <option value={e.id}>{e.name}</option>)}
                <option value={null}>Other</option>
              </Field>
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
  );
};

export default CreateCategory;
