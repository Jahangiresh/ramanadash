import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import "../scss/products.scss";
import pen from "../assets/images/Vector.png";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil, BsSearch } from "react-icons/bs";
import {
  getIsDeleting,
  deleteProduct,
  fetchAllProducts,
  getAllProducts,
  getLoading,
} from "../features/products/productSlice";
import prodImg from "../assets/images/avt.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const Products = () => {
  const navigate = useNavigate();

  const products = useSelector(getAllProducts);
  const loading = useSelector(getLoading);
  const isDeleting = useSelector(getIsDeleting);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch, isDeleting]);

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       dispatch(deleteProduct(id));
  //       if (isDeleting) {
  //         Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //       }
  //     }
  //   });
  // };

  const prods = [
    {
      id: 1,
      name: "shoes",
      category: "sneaker",
      price: 22,
      quantity: 2,
    },
    {
      id: 2,
      name: "wear",
      category: "dress",
      price: 150,
      quantity: 2,
    },
  ];
  const [search, setSearch] = useState("");

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">image</TableCell>
              <TableCell align="right">category</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">quantity</TableCell>
              <TableCell align="right">action</TableCell>
              <TableCell className="product__input__cell" align="right">
                <input
                  className="product__input__cell__inp"
                  placeholder="search"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prods
              .filter((e) => e.name.includes(search))
              .map((prod) => (
                <TableRow
                  key={prod.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    12{" "}
                  </TableCell>
                  <TableCell align="right">{prod.name}</TableCell>
                  <TableCell className="product__img__cell" align="right">
                    <img src={prodImg} alt="" />
                  </TableCell>
                  <TableCell align="right">{prod.category}</TableCell>
                  <TableCell align="right">{prod.price}</TableCell>
                  <TableCell align="right">{prod.quantity}</TableCell>
                  <TableCell align="right">
                    <img
                      onClick={() => navigate("/productdetails")}
                      className="edit__icon"
                      src={pen}
                      alt=""
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <button
        onClick={() => navigate("/CreateProduct")}
        className="product__add__button"
      >
        add product
      </button>
    </>

    // <div className="products">
    //   <label htmlFor="search">
    //     <BsSearch />
    //   </label>
    //   <input className="search__input" type="text" placeholder="search" />
    //   <div className="addbtn">
    //     <button
    //       className="border-0  bg-light"
    //       onClick={() => navigate("/CreateProduct")}
    //     >
    //       add product
    //     </button>
    //   </div>
    //   <div className="col-12 p-0">
    //     <table className="table ">
    //       <thead className="p-0">
    //         <tr>
    //           <th scope="col">#</th>
    //           <th scope="col">ad</th>
    //           <th scope="col">sekil</th>
    //           <th className="d-none d-md-block " scope="col">
    //             cat
    //           </th>
    //           <th className="d-none d-md-block " scope="col">
    //             qiymet
    //           </th>
    //           <th className="d-none d-md-block " scope="col">
    //             say
    //           </th>
    //           <th>action</th>
    //         </tr>
    //       </thead>
    //       <div className="my__box ">
    //         {loading ? (
    //           <div className="loader">
    //             {" "}
    //             <ReactLoading
    //               type="bubbles"
    //               color="#ff9066"
    //               width={100}
    //               height={100}
    //             />{" "}
    //           </div>
    //         ) : (
    //           products &&
    //           products.map((p) => (
    //             <tbody>
    //               <tr>
    //                 <th scope="row">1</th>
    //                 <td className="td__name">{p.name}</td>

    //                 <td className="image__td">
    //                   <img
    //                     src={`https://newramana.azurewebsites.net/uploads/images/${p.images[0].path}`}
    //                     alt="productimage"
    //                   />
    //                 </td>
    //                 <td className="d-none d-md-block ">shoes</td>

    //                 <td className="d-none d-md-block ">{p.stockKeepingUnit}</td>
    //                 <td className="d-none d-md-block ">{p.price}azn</td>

    //                 <td className="d-none d-md-block ">
    //                   <select
    //                     className="form-select"
    //                     aria-label="Default select example"
    //                   >
    //                     <option selected>active</option>
    //                     <option value="1">deactive</option>
    //                   </select>
    //                 </td>
    //                 <td className="edit__td">
    //                   <button className="border-0 bg-light">edit</button>
    //                   <br />
    //                   <span className="edit__pen__span">
    //                     <img
    //                       className="edit__pen"
    //                       onClick={() => navigate("/productdetails")}
    //                       src={pen}
    //                       alt=""
    //                     />
    //                     <BsPencil onClick={() => navigate("/productdetails")} />
    //                   </span>
    //                   <span>
    //                     <AiOutlineDelete onClick={() => handleDelete(p.id)} />
    //                   </span>
    //                   <button onClick={() => handleDelete(p.id)}>delete</button>
    //                 </td>
    //               </tr>
    //             </tbody>
    //           ))
    //         )}
    //       </div>
    //     </table>
    //   </div>
    // </div>
  );
};

export default Products;
