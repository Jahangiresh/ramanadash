import React from "react";
import "../scss/about.scss";
const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">about us</h1>
      <div className="about__row row">
        <div className="about__row__left col-6">
          <p>text 1</p>
          <label htmlFor="">title:</label>
          <input className="about__input" type="text" />
          <label htmlFor="">description:</label>
          {/* <input className="about__input" type="text" /> */}
          <textarea
            className="about__input"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input className=" custom-file-input" type="file" />
        </div>
        <div className="about__row__right col-6">
          <p>text 2</p>

          <label htmlFor="">title:</label>
          <input className="about__input" type="text" />
          <label htmlFor="">description:</label>
          {/* <input className="about__input" type="text" /> */}
          <textarea
            className="about__input"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input className=" custom-file-input" type="file" />
        </div>
      </div>
    </div>
  );
};

export default About;
