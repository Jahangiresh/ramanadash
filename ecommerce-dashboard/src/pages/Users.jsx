import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "ali aliyev",
    phone: "222 22 22",
    email: "ali@aloi.co",
    status: "active",
  },
  {
    id: 2,
    name: "john aliyev",
    phone: "333 22 22",
    email: "john@aloi.co",
    status: "deactive",
  },
];

export default function Users() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center mb-5">users</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="left">name</TableCell>
              <TableCell align="left">phone</TableCell>
              <TableCell align="left">email</TableCell>
              <TableCell align="left">status</TableCell>
              <TableCell align="right">e/d</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {users.status}
                </TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell align="left">{user.email}</TableCell>

                <TableCell
                  className={`
                text-${user.status === "active" ? "success" : "danger"}
                `}
                  align="left"
                >
                  {user.status}
                </TableCell>
                <TableCell align="right">
                  <BsPencil
                    onClick={() => navigate(`/users/${user.id}`)}
                    className="edit__icon__size"
                  />
                  <BsTrash className="edit__icon__size" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
