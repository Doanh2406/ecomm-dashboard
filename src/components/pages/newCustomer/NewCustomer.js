import React from "react";
import "./NewCustomer.scss";
function NewCustomer() {
  return (
    <div className="new-customer">
      <h1 className="new-customer__title">NewCustomer</h1>
      <form action="" className="new-customer__form">
        <div className="new-customer__item">
          <label htmlFor="">Customer Name</label>
          <input type="text" placeholder="Quydi" />
        </div>
        <div className="new-customer__item">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="le Xuan Quoc Doanh" />
        </div>
        <div className="new-customer__item">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="quydi@gmail.com" />
        </div>
        <div className="new-customer__item">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="123456" />
        </div>
        <div className="new-customer__item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="0334058558" />
        </div>
        <div className="new-customer__item">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="quang tri" />
        </div>
        <div className="new-customer__item">
          <label htmlFor="">Gender</label>
          <div className="new-customer__gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="">Male</label>
            <input type="radio" name="gender" id="FeMale" value="FeMale" />
            <label htmlFor="">FeMale</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="">Other</label>
          </div>
        </div>
          <div className="new-customer__item">
              <label htmlFor="">Active</label>
              <select name="active" id="active" className="new-customer__select">
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
              </select>
          </div>
          <button className="new-customer__button">Create</button>
      </form>
    </div>
  );
}
export default NewCustomer;
