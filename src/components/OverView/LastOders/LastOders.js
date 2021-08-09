import React from 'react'
import './LastOders.css'

function LastOders() {
    return (
        <div className="last-oders">
            <span>Last Oders</span>
            <div className="last-oders__table">
                <table className="table">

                <tr className="table-header">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>TracKing</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>#5467</td>
                    <td className="last-oder__names">
                        <img src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215" alt="Avatar" className="avatar"/>
                        <span className="last-oder__name">Joe biden</span>
                    </td>
                    <td>19/09/12</td>
                    <td>complete</td>
                    <td>$90.000</td>
                </tr>
                <tr>
                    <td>#080699</td>
                    <td className="last-oder__names">
                        <img src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215" alt="Avatar" className="avatar"/>
                        <span className="last-oder__name">Luong Viet Japan</span>
                    </td>
                    <td>19/09/12</td>
                    <td>complete</td>
                    <td>$90.000</td>
                </tr>
                </table>
            </div>
            
        </div>
    )
}

export default LastOders
