import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
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
    const cards = localStorage.getItem("wishlist");
    const res = cards.includes(cardId);
    if (res === false) {
      // if the wishlist array not includes the chousen card.
      console.log("is not unclude");
    } else {
      // if the wishlist array includes the chousen card.
      console.log("it is include");
    }
  };
  add = (thecardId) => {
    console.log(thecardId);
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
