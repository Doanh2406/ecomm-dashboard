import React from 'react'
import './CustomerInfor.scss'
function CustomerInfor() {
    return (
        <div className="customer-infor">
            <div className="customer__container">
                <div className="customer__title">Edit</div>
                <div className="customer__add-button">Create</div>
            </div>
            <div className="customer__container-title">
                <div className="customer__show">
                    <div className="customer__show-top">
                        <img src="" alt="" className="customer__show-image" />
                        <div className="customer__show-top__title">
                            <span className="customer__show-top__name">le xuan quoc Doanh</span>
                            <span className="customer__show-top__title">dep trai vo cung</span>
                        </div>
                    </div>
                    <div className="customer__show-bottom"></div>
                </div>
                <div className="customer__update"></div>
            </div>
        </div>
    )
}

export default CustomerInfor
