import React, { Component } from "react";
import Registration from "./auth/registration";
import Login from "./auth/login";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    //TODO update parent component
    this.props.handleLogin(data); //take in as render prop and call it to go grab data and pass it to app component
    this.props.history.push("/dashboard"); //redirect user
    //when we used ...props inside home, take all of current props react router has and also include them; tack a few more on.
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("LOGOUT ERROR", error);
      });
  }

  render() {
    return (
      <div>
        <h1>home</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}

export default Home;
