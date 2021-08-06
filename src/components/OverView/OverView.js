import React from "react";
import FeedOverView from "./FeedOverView/FeedOverView";
import SuggestOverView from "./SuggestOverView/SuggestOverView";
import './OverView.css';

export default function OverView() {
  return (
    <div className="overview">
      <div className="overview__feed">
        <FeedOverView />
      </div>
      <div className="overview__suggest">
        <SuggestOverView />
      </div>
    </div>
  );
}
