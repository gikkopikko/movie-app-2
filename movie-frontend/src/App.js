import logo from "./logo.svg";
import SeatBooking from "./components/SeatBooking.jsx";
import Profile from "./components/Profile";
import Profile2 from "./components/Profile2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import C1 from "./components/C1";
import C2 from "./components/C2";
import C3 from "./components/C3";
import Default from "./components/Default";
function App() {
  return (
    <div className="App">
      {/* <SeatBooking /> */}
      {/* <Profile /> */}
      {/* <Profile2 /> */}
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Default} />
          <Route exact path="/component1" component={C1} />
          <Route exact path="/component2" component={C2} />
          <Route exact path="/component3" component={C3} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
