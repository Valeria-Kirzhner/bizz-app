import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Bizz App About Page" />
        <div className="row">
          <div className="col-12 mt-4">
            <h2>About Bizz App</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              We all know that creating fisical bussiness cards it's cost some
              money, sometimes they are gone and we need to remember to order
              new quality. And sometimes we just forgot the costume in the
              office and we extrimely need to give someone our card right now.
            </p>
            <p>
              Bizz app was created to give you comfortible platform to your
              bussiness card in your phone.{" "}
            </p>
            <p>
              You can create one or more cards and share theme with everyone who
              have registred in Bizz app.
            </p>
            <p>
              Your partner can save your card in his account either you can save
              some other user's card in your account and use see theme when ever
              you want. No more drugging a pursle with hundred of cards.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
