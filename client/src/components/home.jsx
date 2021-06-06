import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container ">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-sm-offset-4 center-block">
              <div class="input-group rounded mt-3">
                <input
                  type="search"
                  class="form-control rounded "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <PageHeader titleText="Bizz App Home Page" />
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
