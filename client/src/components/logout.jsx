import { Component } from "react";
import userService from "../services/userService";

class Logout extends Component {
  componentDidMount() {
    userService.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
