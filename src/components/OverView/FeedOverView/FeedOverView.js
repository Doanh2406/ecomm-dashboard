import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GiScales } from "react-icons/gi";
import "./FeedOverView.css";
import Chart from './../Chart/Chart'
import LastOders from './../LastOders/LastOders'

export default function FeedOverView() {
  return (
    <div className="feed">
      <div className="feed__header">
        <div className="feed__title">
          <h1>OverView</h1>
        </div>
        <div className="feed__search">
          <AiOutlineSearch />
          <input type="text" className="" placeholder="Search" />
        </div>
      </div>

      <div className="feed__total">
        <div className="feed__total-item ">
          <div className="feed__total-item__icon feed__total-item--succes">
            <BsGraphUp />
          </div>
          <div className="feed__total-item__content">
            <span className="feed__total-item__title">Total Revenue</span>
            <span className="feed__total-item__money">$25,195.18</span>
            <div className="feed__total-item__oper">
              <span className="feed__total-item__oders">250+ Orders</span>
              <span className="feed__total-item__percent feed__total-item--succes">
                +10.5%
              </span>
            </div>
          </div>
        </div>
        <div className="feed__total-item ">
          <div className="feed__total-item__icon feed__total-item--primary">
            <BiUser />
          </div>
          <div className="feed__total-item__content">
            <span className="feed__total-item__title"> Customer</span>
            <span className="feed__total-item__money">180,125</span>
            <div className="feed__total-item__oper">
              <span className="feed__total-item__oders">250+ Orders</span>
              <span className="feed__total-item__percent feed__total-item--primary">
                +5.8%
              </span>
            </div>
          </div>
        </div>
        <div className="feed__total-item ">
          <div className="feed__total-item__icon feed__total-item--warning">
            <GiScales />
          </div>
          <div className="feed__total-item__content">
            <span className="feed__total-item__title">AVG Orders Value</span>
            <span className="feed__total-item__money">20.21%</span>
            <div className="feed__total-item__oper">
              <span className="feed__total-item__oders">Last Week</span>
              <span className="feed__total-item__percent feed__total-item--warning">
                -2.2%
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="feed__chart">
        <Chart/>
      </div>


      <div className="feed_last">
        <LastOders/>
      </div>
    </div>
  );
}
