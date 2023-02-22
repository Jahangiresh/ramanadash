import React from "react";
import { useParams } from "react-router-dom";
import "../scss/users.scss";

const EditUser = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div className="edituser">
      <div className="edituser__row row">
        <div className="edituser__row__left col-6">
          <label className="edituser__row__left__label" htmlFor="name">
            Name:
          </label>
          <input
            className="edituser__row__left__input"
            type="text"
            name="name"
            id=""
          />
          <label className="edituser__row__left__label" htmlFor="phone">
            Phone:
          </label>
          <input
            className="edituser__row__left__input"
            type="text"
            name="name"
            id=""
          />
          <label className="edituser__row__left__label" htmlFor="password">
            Password
          </label>
          <input
            className="edituser__row__left__input"
            type="text"
            name="name"
            id=""
          />
        </div>

        <div className="edituser__row__right col-6">
          <label className="edituser__row__right__label" htmlFor="surname">
            Surname:
          </label>
          <input
            className="edituser__row__right__input"
            type="text"
            name="surname"
            id=""
          />
          <label className="edituser__row__right__label" htmlFor="email">
            Email:
          </label>
          <input
            className="edituser__row__right__input"
            type="text"
            name="email"
            id=""
          />
          <label className="edituser__row__right__label" htmlFor="status">
            Status
          </label>
          <select className="edituser__row__right__input" name="" id="">
            <option value="deactive">deactive</option>
            <option value="active">active</option>
          </select>
        </div>
        <div className="savebtn">
          <button className="save__btn">save</button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
