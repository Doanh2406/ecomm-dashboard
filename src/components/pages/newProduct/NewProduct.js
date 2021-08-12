import React from "react";
import "./NewProduct.scss";

function NewProduct() {
  return (
    <div className="newproduct">
      <h1 className="add-product__title">New Product</h1>
      <form action="" className="add-product_form">
        <div className="add-product__item">
          <label htmlFor="">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="add-product__item">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Apple Airpid"/>
        </div>
        <div className="add-product__item">
            <label htmlFor="">Stock</label>
            <input type="text" placeholder="123"/>
        </div>
        <div className="add-product__item">
            <label htmlFor="">Active</label>
            <select name="active" id="active">
                <option value="yes">YES</option>
                <option value="no">NO</option>

            </select>
        </div>
        <button className="add-product__button">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
