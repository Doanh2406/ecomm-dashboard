import React from "react";
import {
  AiFillBell,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import "./SuggestOverView.css";

export default function SuggestOverView() {
  return (
    <div className="suggest">
      <div className="suggest__header">
        <div className="suggest__icons">
          <div className="suggest__icon">
            <AiFillBell />
          </div>
          <div className="suggest__icon">
            <AiOutlineSetting />
          </div>
          <div className="suggest__icon"></div>
          <AiOutlineQuestionCircle />
        </div>
        <div className="suggest_avatar">
          <img
            src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
            alt="Avatar"
            className="avatar"
          />
        </div>
      </div>

      <div className="suggest__today-orders">
        <span>Today Orders</span>
        <div className="today-oders_content">
          <img
            src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
            alt="Avatar"
            className="today-orders_image"
          />
          <div className="today-orders__title">
            <span>SkateBoard</span>
            <span>iilustration</span>
          </div>
          <div className="today-orders__price">
            <span>$300</span>
            <span>40 Pce</span>
          </div>
        </div>


        <div className="today-oders_content">
          <img
            src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
            alt="Avatar"
            className="today-orders_image"
          />
          <div className="today-orders__title">
            <span>Languge source </span>
            <span>quy di han some</span>
          </div>
          <div className="today-orders__price">
            <span>$700</span>
            <span>4 Pce</span>
          </div>
        </div>

        <div className="today-oders_content">
          <img
            src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
            alt="Avatar"
            className="today-orders_image"
          />
          <div className="today-orders__title">
            <span>Vier nhat Japan qua</span>
            <span>hello viet naht</span>
          </div>
          <div className="today-orders__price">
            <span>$300</span>
            <span>40 Pce</span>
          </div>
        </div>

        <div className="today-oders_content">
          <img
            src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
            alt="Avatar"
            className="today-orders_image"
          />
          <div className="today-orders__title">
            <span>SkateBoard</span>
            <span>iilustration</span>
          </div>
          <div className="today-orders__price">
            <span>$300</span>
            <span>40 Pce</span>
          </div>
        </div>


        <div className="today-oders_content">
          <img
            src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
            alt="Avatar"
            className="today-orders_image"
          />
          <div className="today-orders__title">
            <span>le xuan luong viet Cong</span>
            <span>thai bao minh haofn</span>
          </div>
          <div className="today-orders__price">
            <span>$300</span>
            <span>40 Pce</span>
          </div>
        </div>

        <div className="today__button">
        <i class="arrow down" />  
        </div>

      </div>
    </div>
  );
}
