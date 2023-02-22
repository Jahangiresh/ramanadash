import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllGenders,
  getAllGenders,
  getLoading,
} from "../features/genders/genderSlice";
import "../scss/products.scss";

const Genders = () => {
  const navigate = useNavigate();

  const genders = useSelector(getAllGenders);
  const loading = useSelector(getLoading);
  // let image = `https://newramana.azurewebsites.net/uploads/images/${}`
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllGenders());
  }, [dispatch]);
  return (
    <div className="products">
      <div className="addbtn">
        <button
          className="border-0  bg-light"
          onClick={() => navigate("/CreateGender")}
        >
          <i className="bx bx-folder-plus"></i>
        </button>
      </div>
      <div className="col-12 p-0">
        <table className="table ">
          <thead className="p-0">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th className="d-none d-md-block " scope="col">
                Status
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <div className="my__box ">
            {loading ? (
              <div className="loader">
                {" "}
                <ReactLoading
                  type="bubbles"
                  color="#ff9066"
                  width={100}
                  height={100}
                />{" "}
              </div>
            ) : (
              genders &&
              genders.map((g, i) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td className="image__td">
                        <img
                          src={`https://newramana.azurewebsites.net/uploads/images/${g.imagePath}`}
                          alt=""
                        />
                      </td>
                      <td>{g.name}</td>
                      <td className="d-none d-md-block ">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          {g.deleteDate ? (
                            <>
                              <option>active</option>
                              <option selected value="1">
                                deactive
                              </option>
                            </>
                          ) : (
                            <>
                              <option selected>active</option>
                              <option value="1">deactive</option>
                            </>
                          )}
                        </select>
                      </td>
                      <td>
                        <button
                          onClick={() => navigate("/productdetails")}
                          className="border-0 bg-light"
                        >
                          <i className="bx bx-edit-alt"></i>
                        </button>
                        <button className="border-0 bg-light">
                          <i className="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            )}
          </div>
        </table>
      </div>
    </div>
  );
};

export default Genders;
