import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import userService from "../services/userService";

class Search extends Form {
  state = {
    data: {
      cardNum: "",
    },
    errors: {},
  };

  schema = {
    cardNum: Joi.string().required().min(6).label("cardNumber"),
  };

  doSubmit = async () => {
    const { cardNum } = this.state.data;
    try {
    } catch {}
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-sm-offset-4 center-block">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              <div class="input-group rounded mt-3">
                {this.renderInput("cardNumber", "Card-Number")}
                {this.renderButton("Search")}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
