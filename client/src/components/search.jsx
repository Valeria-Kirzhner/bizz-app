import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { toast } from "react-toastify";
import cardService from "../services/cardService";
import FoundCard from "./foundCard";

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

  check = (cardId) => {
    let list = localStorage.getItem("wishlist");
    const res = list.includes(cardId);

    if (res === false) {
      // if the wishlist array not includes the chousen card.

      this.addToWishlist(cardId, list);
    } else {
      // if the wishlist array includes the chousen card.

      this.removeFromWishlist(cardId, list);
    }
  };

  addToWishlist = (thecardId, list) => {
    list = list + `,${thecardId}`;
    localStorage.setItem("wishlist", list);
    toast("Card is added to your wishlist.");
  };

  removeFromWishlist = (thecardId, list) => {
    list = list.replace(`,${thecardId}`, "");
    localStorage.setItem("wishlist", list);
    toast("Card is remover from your wishlist.");
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
    const { card } = this.state;

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
        <div>
          {card.bizName && (
            <FoundCard card={card} key={card._id} check={this.check} />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
