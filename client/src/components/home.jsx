import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Search from "./search";
import FoundCard from "./foundCard";

class Home extends Component {
  state = {
    cards: [],
  };
  async componentDidMount() {
    const { data } = await cardService.get();
    if (data.length > 0) this.setState({ cards: data });
  }

  render() {
    let { cards } = this.state;

    return (
      <div className="container ">
        <PageHeader titleText="Bizz App Home Page" />
        <div className="col-12 mt-4">
          <h3 className="text-secondary">Find card:</h3>
        </div>
        <Search />
        <div className="row">
          <div className="col-12">
            <div className="row">
              {cards.length > 0 &&
                cards.map((card) => (
                  <FoundCard card={card} key={card._id} check={this.check} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
