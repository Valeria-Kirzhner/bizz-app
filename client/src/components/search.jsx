import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import cardService from "../services/cardService";

class Search extends Form {
  state = {
    data: {
      bizNumber: "",
    },
    card: {
      _id: "",
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    bizNumber: Joi.string().required().min(6).label("bizNumber"),
  };

  doSubmit = async () => {
    const {
      data: { bizNumber },
    } = this.state;

    try {
      const { data } = await cardService.searchCard(bizNumber);

      if (data) {
        this.setState({ card: { ...data } });
      } else {
        //      this.setState({ errors: { "No card was found" } });
        //tostufy
      }
    } catch (ex) {
      //tostufy
    }
  };

  render() {
    const { bizName } = this.state.card;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 center-block">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              <div className="input-group rounded mt-3">
                {this.renderInput("bizNumber", "bizNumber", "number")}
                {this.renderButton("Search")}
              </div>
            </form>
          </div>
        </div>
        <div>{bizName}</div>
      </div>
    );
  }
}

export default Search;