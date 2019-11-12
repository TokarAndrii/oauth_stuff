import React, { useState } from "react";
import "./App.css";

import { GoogleLogin, GoogleLogout } from "react-google-login";

function App() {
  const [idToken, setIdToken] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(null);

  const responseGoogle = response => {
    console.log("responseGoogle - ", response);
    console.log("response.Zi.id_token", response.Zi.id_token);
    response.Zi.id_token && setIdToken(response.Zi.id_token);
    setFirstName(response.profileObj.givenName);
    setSecondName(response.profileObj.familyName);
    setImage(response.profileObj.imageUrl);
    setEmail(response.profileObj.email);
  };

  const handleLogout = response => {
    console.log("handleLogout - ", response);
    setIdToken(null);
    setFirstName(null);
    setSecondName(null);
    setImage(null);
    setEmail(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span style={{ marginRight: "8px" }}>
          <GoogleLogin
            clientId="1033331788635-f5vl5sl74djaibeu09bbpqiuq5nq8uqa.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </span>
        <span>
          <GoogleLogout
            clientId="1033331788635-f5vl5sl74djaibeu09bbpqiuq5nq8uqa.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
          />
        </span>
      </header>
      <main className="main">
        {image && <img src={image} alt="foto"></img>}
        {firstName && secondName && email && (
          <span>
            Welcome back
            <b>
              <span style={{ marginRight: "4px", marginLeft: "4px" }}>
                {firstName}
              </span>

              <span style={{ marginRight: "4px" }}>{secondName}</span>
              <p>{email}</p>
            </b>
          </span>
        )}
      </main>
    </div>
  );
}

export default App;
