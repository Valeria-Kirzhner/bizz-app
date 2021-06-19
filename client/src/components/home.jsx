import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import Search from "./search";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container ">
        <PageHeader titleText="Bizz App Home Page" />
        <div className="col-12 mt-4">
          <h3 className="text-secondary">Find card:</h3>
        </div>
        <Search />

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

export default Home;
