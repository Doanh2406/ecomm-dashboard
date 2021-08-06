import React from 'react'
import './Chart2.css'
export default function Chart2() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="chart-wrap">
            <div class="col-sm-6 text-center">
              <div class="donut-chart chart1">
                <div class="slice one"></div>
                <div class="slice two"></div>
                <div class="chart-center">
                  <span>78%</span>
                </div>
              </div>
          
            </div>
            
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center">
            <p><span class="legend"></span>% products have bought</p>
          </div>
        </div>
      </div>
    </div>
  )
}
