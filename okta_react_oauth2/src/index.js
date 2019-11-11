import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Security, ImplicitCallback, SecureRoute } from "@okta/okta-react";
import Profile from "./Profile";

const CALLBACK_PATH = "/implicit/callback";

const clientId = "0oa1satlc9UfKAgPL357";
const yourOktaDomain = "dev-527003.okta.com";

const config = {
  clientId: `${clientId}`,
  issuer: `https://${yourOktaDomain}/oauth2/default`,
  redirectUri: `http://localhost:3000/implicit/callback`,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true
};

ReactDOM.render(
  <BrowserRouter>
    <Security {...config}>
      <Route component={App} path="/" />
      <SecureRoute exact path="/profile" component={Profile} />
      <Route path={CALLBACK_PATH} component={ImplicitCallback} />
    </Security>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
