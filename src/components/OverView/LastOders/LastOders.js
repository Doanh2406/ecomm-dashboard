import React from 'react'
import './LastOders.css'

function LastOders() {
    return (
        <div className="last-oders">
            <span>Last Oders</span>
            <div className="last-oders__table">
                <table>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>TracKing</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>#5467</td>
                    <td>
                        <img src="https://baoquocte.vn/stores/news_dataimages/haiyen/042021/29/09/3812_800.jpg?rt=20210719095215" alt="Avatar" className="avatar"/>
                        <div>name</div>
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
