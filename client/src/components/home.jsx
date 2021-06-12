import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import Search from "./search";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container ">
        <PageHeader titleText="Bizz App Home Page" />
        <Search />

        <div className="row">
          <div className="col-12 mt-4">
            <h1>Biz App Home Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>It's all about bussiness</h3>
            <h4>pDiscover new possibilities </h4>
            <h4>Create your own card </h4>
            <h4>Share </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
