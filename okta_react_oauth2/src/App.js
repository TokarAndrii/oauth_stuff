import React, { Component } from "react";
import "./App.css";
import { withAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
  authenticated: false,
  userinfo: null,
  accessToken: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  state = { ...INITIAL_STATE };

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    console.log("authenticated", authenticated);
    const userinfo = await this.props.auth.getUser();
    const accessToken = await this.props.auth.getAccessToken();
    if (
      authenticated !== this.state.authenticated ||
      userinfo !== this.state.userinfo
    ) {
      this.setState({ authenticated, userinfo, accessToken });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    console.log("componentDidUpdate");
    this.checkAuthentication();
  }

  async handleLogin() {
    console.log("handleLogin");
    this.props.auth.login("/profile");
    this.setState({ authenticated: true });
  }

  async handleLogout() {
    console.log("handleLogout");
    this.props.auth.logout("/");
  }

  render() {
    return (
      <div className="App">
        App
        <br></br>
        <Link to="/profile">profile</Link>
        <br></br>
        <Link to="/">home</Link>
        <div>
          {!this.state.authenticated && (
            <button onClick={this.handleLogin}>login</button>
          )}
        </div>
        <div>
          {this.state.authenticated && (
            <button onClick={this.handleLogout}>logout</button>
          )}
        </div>
        <div>
          {this.state.authenticated &&
            this.state.userinfo &&
            this.state.userinfo !== null && (
              <div>
                <p>Welcome back, {this.state.userinfo.name}!</p>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default withAuth(App);
