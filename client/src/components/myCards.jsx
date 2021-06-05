import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Card from "./card";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }

  deleteCardClientSide = async (cardId) => {
    Swal.fire({
      title: "Are you sure you want to delete this card?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "grey",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let cards = [...this.state.cards];
        cards = cards.filter((card) => card._id !== cardId); // it will return all users cards exept of the card with the cardId.
        this.setState({ cards });
      }
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="container">
        <PageHeader titleText="My Cards Page" />
        <div className="row">
          <div className="col-12">
            <p>
              <Link className="btn btn-primary" to="/create-card">
                + Add card
              </Link>
            </p>
            <p>Your cards in the list below...</p>
          </div>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                deleteCardClientSide={this.deleteCardClientSide}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default MyCards;
