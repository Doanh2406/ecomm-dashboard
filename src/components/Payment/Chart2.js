import React from "react";
import "./Chart.css";

const data = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 40 },
  { name: "Wed", value: 35 },
  { name: "Thu", value: 50 },
  { name: "Fri", value: 55 },
  { name: "Sat", value: 40 },
  { name: "Sun", value: 30 },
];
function Chart() {
  return (
    <div className="charts">
      <span>Today Sales</span>
      <div className="barchart">
        <div className="chart-col">
          <span className="chart-col__item">100</span>
          <span className="chart-col__item">75</span>
          <span className="chart-col__item">50</span>
          <span className="chart-col__item">25</span>
          <span className="chart-col__item">0</span>
        </div>

        <div className="chart-layouts">
          <div className="layouts">
            <div className="chart-layout">
              <div className="chart-layout__item " style={{ "--percent": "70%" }}>
                70%
              </div>
              <div
                className="chart-layout__item chart-layout__item--primary "
                style={{ "--percent": "50%" }}
              >
                50%
              </div>
            </div>

            <div className="layout_row">
              <span>Jan</span>
            </div>
          </div>
          <div className="layouts">
            <div className="chart-layout">
              <div className="chart-layout__item " style={{ "--percent": "55%" }}>
                55%
              </div>
              <div
                className="chart-layout__item chart-layout__item--primary "
                style={{ "--percent": "45%" }}
              >
                45%
              </div>
            </div>

            <div className="layout_row">
              <span>Feb</span>
            </div>
          </div>

          <div className="layouts">
            <div className="chart-layout">
              <div className="chart-layout__item " style={{ "--percent": "90%" }}>
                90%
              </div>
              <div
                className="chart-layout__item chart-layout__item--primary "
                style={{ "--percent": "60%" }}
              >
                60%
              </div>
            </div>

            <div className="layout_row">
              <span>Mar</span>
            </div>
          </div>

          <div className="layouts">
            <div className="chart-layout">
              <div className="chart-layout__item " style={{ "--percent": "70%" }}>
                70%
              </div>
              <div
                className="chart-layout__item chart-layout__item--primary "
                style={{ "--percent": "50%" }}
              >
                50%
              </div>
            </div>

            <div className="layout_row">
              <span>Apr</span>
            </div>
          </div>
          <div className="layouts">
            <div className="chart-layout">
              <div className="chart-layout__item " style={{ "--percent": "90%" }}>
                90%
              </div>
              <div
                className="chart-layout__item chart-layout__item--primary "
                style={{ "--percent": "50%" }}
              >
                50%
              </div>
            </div>

            <div className="layout_row">
              <span>May</span>
            </div>
          </div>
          <div className="layouts">
            <div className="chart-layout">
              <div className="chart-layout__item " style={{ "--percent": "80%" }}>
                80%
              </div>
              <div
                className="chart-layout__item chart-layout__item--primary "
                style={{ "--percent": "50%" }}
              >
                50%
              </div>
            </div>

            <div className="layout_row">
              <span>June</span>
            </div>
          </div>
           <div className="layouts">
            <div className="chart-layout">
              <div className="chart-layout__item " style={{ "--percent": "75%" }}>
                75%
              </div>
              <div
                className="chart-layout__item chart-layout__item--primary "
                style={{ "--percent": "50%" }}
              >
                50%
              </div>
            </div>

            <div className="layout_row">
              <span>July</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
