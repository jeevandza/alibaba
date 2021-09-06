import { directive } from "@babel/types";
import React, { useEffect } from "react";
import SignUp from "./components/signup/index";
import SignIn from "./components/signin/index";
import VerifyEmail from "./containers/pleaseCheckEmail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import LayOut from "./components/layout";

const App = () => {

  
  return (
    <div>
      <Router>
        <Switch>
        
          {/* Route eto signup */}
          <Route exact path="/signUp" component = {SignUp}>
            <SignUp />
          </Route>
          {/* Route to signin */}
          <Route exact path="/signIn">
            <SignIn></SignIn>
          </Route>
          {/* Route to verify email */}
          <Route exact path="/please-check-email">
            <VerifyEmail />
          </Route>
          {/* Route to layout and home */}
          <Route exact path="/home">
            <LayOut>
              <Home />
            </LayOut>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
