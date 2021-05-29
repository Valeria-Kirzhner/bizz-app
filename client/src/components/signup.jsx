import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";

class Signup extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Bizz App Signup Page" />
        <div className="row">
          <div className="col-12 mt-4">
            <h1>Signup for Bizz App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>You can open new account for free!</p>
          </div>
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("name", "Name")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
