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
    console.log(this.state.cards);
  }

  check = (cardId) => {
    const cards = localStorage.getItem("wishlist");
    const res = cards.includes(cardId);
    if (res === false) {
      console.log("ok");
    }
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
