import React from "react";
import "./ProductList.scss";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import { useState } from "react";
import {productRows} from '../../../datajson';
function ProductList() {

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product Name",
          width: 400,
      
          renderCell: (params) => {
            // console.log();
            return (
              <div className="product-list">
                <img src={params.row.img} alt="" className="product__img" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "stock",
          headerName: "Stock",
          width: 200,
        },
        {
          field: "status",
          headerName: "Status",
          width: 200,
        },
        {
          field: "price",
          headerName: "Price",
          width: 200,
        },
        {
          field: "action",
          headerName: "ACtions",
          width: 200,
          renderCell: (params) => {
            return (
              <>
              <Link to={"/product/"+params.row.id}>
              
                <button className="product-list__edit">Edit</button>
              </Link>
                <DeleteOutlineIcon className="product-list__delete" 
                onClick={() => handleRemoveClick(params.row.id)}
                />
              </>
            );
          },
        },
      ];
    const [data, setData]= useState(productRows)
    const handleRemoveClick = (id) =>{
        setData(data.filter(item => item.id !== id))
      }
  return (
    <div className="product-list">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default ProductList;
