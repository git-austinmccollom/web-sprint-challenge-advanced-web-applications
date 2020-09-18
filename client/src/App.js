import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
// import { useHistory } from "react-router-dom";

import "./styles.scss";

function App() {
  // let history = useHistory();

  const logOut = () => {
    localStorage.setItem("token", "");
    console.log(localStorage.token);
    // history.push("/");
  };
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/login">Login</Link>
          <Link to="/bubbles">Bubbles</Link>
          <button onClick={() => logOut()}>Logout</button>
        </header>
        <Switch>
          <PrivateRoute exact path="/bubbles" component={BubblePage} />
          <Route exact path="/" component={Login} />
          <Route component={Login} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
