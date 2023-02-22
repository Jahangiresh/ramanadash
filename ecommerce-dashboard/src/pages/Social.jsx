import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../scss/social.scss";
import {
  BsPencil,
  BsEye,
  BsInstagram,
  BsEyeSlash,
  BsFacebook,
} from "react-icons/bs";
import { useState } from "react";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Social() {
  const [toggleEye, setToggleEye] = useState(true);
  const datas = [
    {
      id: 1,
      logo: <BsInstagram className="float-left social__icons" />,
      link: "www.insta.com",
      isActive: toggleEye,
    },
    {
      id: 2,
      logo: <BsFacebook className="float-left social__icons" />,
      link: "www.face.com",
      isActive: true,
    },
  ];
  return (
    <>
      <h1 className="text-center mb-5">Social media</h1>{" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Social media:</TableCell>
              <TableCell align="left">Link</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="right">{data.logo}</TableCell>
                <TableCell align="right">
                  <span className="float-left">
                    <input
                      className="default-input"
                      type="text"
                      defaultValue={data.link}
                    />
                  </span>
                </TableCell>
                <TableCell align="right">
                  <BsPencil />
                  {data.isActive ? (
                    <BsEye
                      className="edit__icon__size"
                      onClick={() => (data.isActive = false)}
                    />
                  ) : (
                    <BsEyeSlash
                      className="edit__icon__size"
                      onClick={() => (data.isActive = true)}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
