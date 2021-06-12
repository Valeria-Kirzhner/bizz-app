import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { toast } from "react-toastify";
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
        toast("No card was found.");
      }
    } catch (ex) {
      toast("No card was found.");
    }
  };

  render() {
    const { bizName } = this.state.card;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 ">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              <div className="input-group rounded mt-3">
                {this.renderInput("bizNumber", "", "number")}
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
