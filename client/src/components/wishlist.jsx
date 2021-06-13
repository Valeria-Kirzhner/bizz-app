import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class wishlist extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="My wishlist cards" />
        <div className="row">
          <div className="col-12 mt-4"></div>
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    );
  }
}

export default wishlist;
