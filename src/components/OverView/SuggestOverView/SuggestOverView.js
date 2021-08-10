import React from "react";
import {
  AiFillBell,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import "./SuggestOverView.css";

const TopSaler = ({ image, name, Auth, dolla, price }) => {
  return (
    <div className="today-oders_content">
      <img
        src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
        alt="Avatar"
        className="today-orders_image"
      />
      <div className="today-orders__title">
        <span>{name}</span>
        <span>{Auth}</span>
      </div>
      <div className="today-orders__price">
        <span>{dolla}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

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

        <TopSaler
          name="Cach choi toc chien len bach kim"
          Auth="Quydi Tiger"
          dolla="300$"
          price="234 Pce"
        />
        <TopSaler
          name="sach day lam giau ko kho"
          Auth="Terutuna"
          dolla="free"
          price="free Pce"
        />
        <TopSaler
          name="Cach choi 1 game chua toi 10ph"
          Auth="T3n 1o12"
          dolla="300$"
          price="234 Pce"
        />
        <TopSaler
          name="Cach feed gay uc che team bn"
          Auth="QuyDi Tiger"
          dolla="500$"
          price="234 Pce"
        />
        <TopSaler
          name="Than Rung BraUm"
          Auth="eslacation"
          dolla="000$"
          price="000 Pce"
        />

        <div className="today__button">
          <i class="arrow down" />
        </div>
      </div>
    </div>
  );
}
