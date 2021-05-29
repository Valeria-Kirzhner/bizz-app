import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Bizz App Signup Page" />
        <div className="row">
          <div className="col-12 mt-4">
            <h1>Signup for Bizz App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>You can open new account for free!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
