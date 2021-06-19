import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import { toast } from "react-toastify";
import cardService from "../services/cardService";
import FoundCard from "./foundCard";
import userService from "../services/userService";
import { stringify } from "joi-browser";

class wishlist extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getWishlist();
    if (data.length > 0) this.setState({ cards: data });
  }

  check = (cardId) => {
    let list = localStorage.getItem("wishlist");

    const res = list.includes(cardId);

    if (res === false) {
      // if the wishlist array not includes the chousen card.
      console.log("no");
      this.addToWishlist(cardId, list);
    } else {
      // if the wishlist array includes the chousen card.
      console.log("yes");

      this.removeFromWishlist(cardId, list);
    }
  };

  addToWishlist = (thecardId, list) => {
    console.log("to add");
    list = list + `,${thecardId}`;
    console.log(list);
    localStorage.setItem("wishlist", list);
    //await userService.addWishlistServer(thecardId);
    // toast("Card is added to your wishlist.");
    //this.props.history.replace("/users/cards");
  };

  removeFromWishlist = (thecardId, list) => {
    console.log("to remove");
    console.log(list);
    list = list.replace(`,${thecardId}`, "");
    console.log(list);
    localStorage.setItem("wishlist", list);
  };
  render() {
    let { cards } = this.state;

    return (
      <div className="container">
        <PageHeader titleText="My wishlist cards" />
        <div className="row">
          <div className="col-12 mt-4"></div>
        </div>
        <div className="row">
          <div className="col-12">
            {cards.length > 0 &&
              cards.map((card) => (
                <FoundCard card={card} key={card._id} check={this.check} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default wishlist;
