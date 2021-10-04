import React, { Component } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/Home";
import Profile from "./components/Profile";

import { getCurrentUser, logout } from "../src/common/api-utils";
import SeatBooking from "./components/SeatBooking";

import MovieDesc from "./components/MovieDescription";

class App extends Component {
  constructor(props) {
    super(props);

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
        // console.log(response);
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
    this.props.history.push("/home");
  };
  componentDidMount() {
    this.loadCurrentUser();
  }

  render() {
    return (
      <div>
        <div className="">
          <header>
            <div className="left">
              <Link to={"/"} className="navbar-brand">
                Movie App
              </Link>
            </div>

            <div className="right">
              {this.state.currentUser ? (
                <div className="holder">
                  <div className="item">
                    <Link to={"/home"} className="nav-link">
                      Home
                    </Link>
                    <Link to={"/profile"} className="nav-link">
                      {this.state.currentUser.username}
                    </Link>

                    <a href="/login" className="nav-link" onClick={logout}>
                      LogOut
                    </a>
                  </div>
                </div>
              ) : (
                <div className="right">
                  <div className="item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                    <Link to={"/register"} className="nav-link">
                      SignUp
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </header>
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login onLogin={this.handleLogin} {...props} />
              )}
            ></Route>
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/home" component={Home} /> */}
            <Route
              path="/seatbooking/:movieId"
              render={(props) => (
                <SeatBooking currentUser={this.state.currentUser} {...props} />
              )}
            ></Route>
            <Route
              path="/profile"
              render={(props) => (
                <Profile currentUser={this.state.currentUser} {...props} />
              )}
            ></Route>
            <Route path="/movie/:id" component={MovieDesc} />
            <Route
              exact
              path="/home"
              render={(props) => (
                <Home currentUser={this.state.currentUser} {...props} />
              )}
            ></Route>
          </Switch>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
