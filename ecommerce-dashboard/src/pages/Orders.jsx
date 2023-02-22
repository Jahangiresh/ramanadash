import { spacing } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrder,
  fetchAllOrders,
  getStatus,
  updateOrder,
} from "../features/order/orderSlice";
import "../scss/orders.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: 1,
    name: "ali aliyev",
    product: "sneakers",
    date: "12/12/2012",
    price: "200usd",
    status: "pending",
  },
  {
    id: 2,
    name: "ali aliyev",
    product: "sneakers",
    date: "12/12/2012",
    price: "200usd",
    status: "cancelled",
  },
  {
    id: 3,
    name: "ali aliyev",
    product: "sneakers",
    date: "12/12/2012",
    price: "200usd",
    status: "completed",
  },
];

const Orders = () => {
  const navigate = useNavigate();
  // const [orderStatus, setOrderStatus] = useState({
  //   status: null,
  //   id: null,
  // });
  // const dispatch = useDispatch();
  // const order = useSelector(getOrder);
  // const status = useSelector(getStatus);

  // useEffect(() => {
  //   dispatch(fetchAllOrders());
  // }, []);
  const [orderValue, setOrderValue] = useState();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">name of buyer</TableCell>
            <TableCell align="left">date</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">status</TableCell>
            <TableCell align="right">more info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.name}
              </TableCell>
              <TableCell align="left">{order.product}</TableCell>
              <TableCell align="left">{order.date}</TableCell>
              <TableCell align="left">{order.price}</TableCell>
              <TableCell align="left">
                <select
                  className={`default-input text-${
                    order.status === "pending"
                      ? "primary"
                      : order.status === "completed"
                      ? "success"
                      : "danger"
                  }`}
                  onChange={(e) => setOrderValue(e.target.value)}
                  // value={order.status}
                  defaultValue={order.status}
                  name="orderstatus"
                  id="orderstatus"
                >
                  <option value={order.status}>{order.status}</option>
                  <option value="cancelled">cancelled</option>

                  <option value="completed">completed</option>
                </select>
              </TableCell>
              <TableCell
                onClick={() => navigate(`/order/${order.id}`)}
                align="right"
                className="more__info"
              >
                more info
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Orders;
