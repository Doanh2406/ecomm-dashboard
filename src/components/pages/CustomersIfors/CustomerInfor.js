import React from "react";
import "./CustomerInfor.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PublishIcon from "@material-ui/icons/Publish";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import {Link} from 'react-router-dom';

function CustomerInfor() {
  return (
    <div className="customer-infor">
      <div className="customer__container">
        <div className="customer__title">Edit</div>
        <Link to="/newcustomer" style={{ textDecoration: 'none' }}>
          <div className="customer__add-button">Create</div>
        </Link>
      </div>
      <div className="customer__container-title">
        <div className="customer__show">
          <div className="customer__show-top">
            <img
              src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
              alt=""
              className="customer__show-image"
            />
            <div className="customer__show-top__titles">
              <span className="customer__show-top__name">
                le xuan quoc Doanh
              </span>
              <span className="customer__show-top__title">
                dep trai vo cung
              </span>
            </div>
          </div>
          <div className="customer__show-bottom">
            <div className="customer__show-bot__title"> Acount Details</div>
            <div className="customer__show-bot__infor">
              <PermIdentityIcon className="customer_shoe-bot_icon" />
              <span className="customer__show-bot__infor-title">
                quydiHansome98
              </span>
            </div>
            <div className="customer__show-bot__infor">
              <CalendarTodayIcon className="customer_shoe-bot_icon" />
              <span className="customer__show-bot__infor-title">
                24.06.1998
              </span>
            </div>
            <div className="customer__show-bot__title"> Contact</div>
            <div className="customer__show-bot__infor">
              <PhoneAndroidIcon className="customer_shoe-bot_icon" />
              <span className="customer__show-bot__infor-title">
                0334 058 558
              </span>
            </div>
            <div className="customer__show-bot__infor">
              <MailOutlineIcon className="customer_shoe-bot_icon" />
              <span className="customer__show-bot__infor-title">
                quydi@gmail.com
              </span>
            </div>
            <div className="customer__show-bot__infor">
              <LocationSearchingIcon className="customer_shoe-bot_icon" />
              <span className="customer__show-bot__infor-title">Quang Tri</span>
            </div>
          </div>
        </div>
        <div className="customer__update">
          <span className="customer__update-title">Edit</span>
          <form action="" className="customer__update-form">
            <div className="customer__update-left">
              <div className="customer__update-item">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="quydi hansome"
                  className="customer__update-input"
                />
              </div>
              <div className="customer__update-item">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Le Xuan quoc doanh"
                  className="customer__update-input"
                />
              </div>
              <div className="customer__update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="0334068668"
                  className="customer__update-input"
                />
              </div>
              <div className="customer__update-item">
                <label>Emaill</label>
                <input
                  type="text"
                  placeholder="quydi hansome"
                  className="customer__update-input"
                />
              </div>
              <div className="customer__update-item">
                <label>Address </label>
                <input
                  type="text"
                  placeholder="quydi@gmail.com"
                  className="customer__update-input"
                />
              </div>
            </div>
            <div className="customer__update-right">
              <div className="customer__update-upload">
                <img
                  src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215"
                  alt=""
                  className="customer__update-img"
                />
                <label htmlFor="file">
                  <PublishIcon className="customer__update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="customer__update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfor;
