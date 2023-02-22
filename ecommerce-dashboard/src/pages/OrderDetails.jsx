import React from "react";
import "../scss/orders.scss";
import prodImg from "../assets/images/avt.jpg";
const OrderDetails = () => {
  return (
    <div className="box p-0">
      <div className="box__head border-bottom py-2 px-4">sa</div>
      <div className="box__content px-4 py-4">
        <div className="box__content__row row px-4">
          <div className="box__content__row__col col-6 d-flex">
            <div className="box__content__row__col__img col-7 ">
              <div className="box__content__row__col__img__text p-2">
                <h1>salam salam</h1>
                <span>123 azn</span>
              </div>

              <img src={prodImg} alt="" />
            </div>
            <div className="box__content__row__col__grid col-5 ">
              <div className="box__content__row__col__grid__up">
                <img src={prodImg} alt="" />
              </div>
              <div className="box__content__row__col__grid__down">
                <img src={prodImg} alt="" />
              </div>
            </div>
          </div>
          <div className="box__content__row__details col-6">
            <h3>product category:</h3>
            <span>moccasine</span>
            <h3>materials :</h3>
            <span>silk</span>
            <h3>size:</h3>
            <span>12,22,33</span>
            <h3>colors:</h3>
            <span>red</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
