import React, { Component } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";

// import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/Home";
import Profile from "./components/Profile";

import { getCurrentUser } from "../src/common/api-utils";
import C1 from "./components/C1";
import C3 from "./components/C3";
import SeatBooking from "./components/SeatBooking";

class App extends Component {
  constructor(props) {
    super(props);
    // this.logOut = this.logOut.bind(this);

    //   this.state = {
    //     currentUser: undefined,
    //   };
    // }
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
    };
  }
  loadCurrentUser = () => {
    this.setState({
      isLoading: true,
    });
    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  };

  handleLogin = () => {
    alert("successfull login");
    this.loadCurrentUser();
    this.props.history.push("/component3");
  };
  componentDidMount() {
    this.loadCurrentUser();
  }

  componentWillUnmount() {
    // EventBus.remove("logout");
  }

  // logOut() {
  //   AuthService.logout();
  //   this.setState({
  //     currentUser: undefined,
  //   });
  // }

  render() {
    // const { currentUser } = this.state;

    return (
      <div>
        <div className="">
          <header>aaaa</header>
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login onLogin={this.handleLogin} {...props} />
              )}
            ></Route>
            <Route exact path="/component1" component={C1} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/component3" component={C3} />
            <Route
              path="/seatbooking/:movieId"
              render={(props) => (
                <SeatBooking currentUser={this.currentUser} {...props} />
              )}
            ></Route>
          </Switch>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default withRouter(App);
