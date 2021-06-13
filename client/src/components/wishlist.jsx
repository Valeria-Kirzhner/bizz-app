import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import FoundCard from "./foundCard";

class wishlist extends Component {
  state = {
    cards: [],
    found: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getWishlist();
    if (data.length > 0) this.setState({ cards: data });
    console.log(this.state.cards);
  }

  render() {
    return (
      <div className="container">
        <PageHeader titleText="My wishlist cards" />
        <div className="row">
          <div className="col-12 mt-4"></div>
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    );
  }
}

export default wishlist;
