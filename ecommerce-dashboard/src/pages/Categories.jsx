import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategories,
  getAllCategories,
  getLoading,
} from "../features/categories/categorySlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useState } from "react";

const Categories = () => {
  const navigate = useNavigate();

  const categories = useSelector(getAllCategories);
  const loading = useSelector(getLoading);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  const cats = [
    { id: 1, name: "pants", status: "active" },
    { id: 2, name: "shirts", status: "deactive" },
    { id: 3, name: "lingerie", status: "active" },
  ];
  const [search, setSearch] = useState("");
  const [activeResult, setActiveResult] = useState("");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "200px",
                }}
              >
                <label htmlFor="search">search</label>
                <input
                  className="search__input"
                  placeholder="search"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </TableCell>
            <TableCell align="left">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="status">status</label>
                <select
                  onChange={(e) => setActiveResult(e.target.value)}
                  className="search__input"
                  name=""
                  id=""
                >
                  <option value="active">active</option>
                  <option value="deactive">deactive</option>
                </select>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cats
            .filter((e) => e.status.includes(activeResult))
            .filter((e) => e.name.includes(search))
            .map((cat) => (
              <TableRow
                key={cat.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {" "}
                <TableCell component="th" scope="row" style={{ width: "19px" }}>
                  {cat.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {cat.name}
                </TableCell>
                <TableCell align="right">{cat.status}</TableCell>
                <TableCell align="right">
                  <span className="edit__icon__size">
                    <BsPencil />
                  </span>
                  <span className="edit__icon__size">
                    <BsTrash />
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Categories;
