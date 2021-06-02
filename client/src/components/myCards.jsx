import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class MyCards extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="My Cards Page" />
        <div className="row">
          <div className="col-12">
            <p>Your cards in the list below...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCards;
