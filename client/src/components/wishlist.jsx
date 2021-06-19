import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import { toast } from "react-toastify";
import cardService from "../services/cardService";
import FoundCard from "./foundCard";

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

      this.addToWishlist(cardId, list);
    } else {
      // if the wishlist array includes the chousen card.

      this.removeFromWishlist(cardId, list);
    }
  };

  addToWishlist = (thecardId, list) => {
    console.log("to add");
    list = list + `,${thecardId}`;
    console.log(list);
    localStorage.setItem("wishlist", list);
    this.updateDB();
    toast("Card is added to your wishlist.");
  };

  removeFromWishlist = (thecardId, list) => {
    console.log("to remove");
    console.log(list);
    list = list.replace(`,${thecardId}`, "");
    console.log(list);
    localStorage.setItem("wishlist", list);
    this.updateDB();
    toast("Card is remover from your wishlist.");
  };

  updateDB = async () => {
    const { data } = await cardService.getWishlist();
    if (data.length > 0) this.setState({ cards: data });
  };

  render() {
    let { cards } = this.state;

    return (
      <div className="container">
        <PageHeader titleText="My wishlist cards" />
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => (
              <FoundCard card={card} key={card._id} check={this.check} />
            ))}
        </div>
      </div>
    );
  }
}

export default wishlist;
