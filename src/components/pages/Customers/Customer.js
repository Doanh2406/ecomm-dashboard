import React from "react";
import "./Customer.scss";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import {useState} from 'react'

export default function Customer() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customerName",
      headerName: "Customer Name",
      width: 400,
  
      renderCell: (params) => {
        // console.log();
        return (
          <div className="cutomer-list">
            <img src={params.row.avatar} alt="" className="customer__avatar" />
            {params.row.customerName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Emaill",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "transition",
      headerName: "Transition",
      width: 200,
    },
    {
      field: "action",
      headerName: "ACtions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/customer/"+params.row.id}>
          
            <button className="customer-list__edit">Edit</button>
          </Link>
            <DeleteOutlineIcon className="customer-list__delete" 
            onClick={() => handleRemoveClick(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  const rows = [
    {
      id: 1,
      customerName: "Luong Viet Nhat",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 2,
      customerName: "Le Xuan Quoc Doanh",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 3,
      customerName: "TERUTU NA",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 4,
      customerName: "Luong Viet Nhat",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 5,
      customerName: "Le Xuan Quoc Doanh",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 6,
      customerName: "TERUTU NA",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
  
    {
      id: 7,
      customerName: "Le Xuan Quoc Doanh",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 8,
      customerName: "TERUTU NA",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 9,
      customerName: "Luong Viet Nhat",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 10,
      customerName: "Le Xuan Quoc Doanh",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
    {
      id: 11,
      customerName: "TERUTU NA",
      avatar:
        "https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215",
      email: "quydihansome@gmail.com",
      status: "true",
      transition: "$120$",
    },
  ];
  const [data, setData] = useState(rows);
  const handleRemoveClick = (id) =>{
    setData(data.filter(item => item.id !== id))
  }
  return (
    <div className="customer-list__table" style={{ height: 600, width: "100%" }}>
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
