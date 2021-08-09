import React from 'react'
import './Chart.css'
export default function Chart() {
  return (
    <div>
      <div class="svg-item">
        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
          <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
          <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
          <circle class="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="30 70" stroke-dashoffset="25"></circle>
          <g class="donut-text donut-text-1">

            <text y="50%" transform="translate(0, 2)">
              <tspan x="50%" text-anchor="middle" class="donut-percent">69%</tspan>
            </text>
            <text y="60%" transform="translate(0, 2)">
              
            </text>
          </g>
        </svg>
       
      </div>
    </div>
  )
}
