import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Routes Import
import routes from "./components/routes";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route component={routes} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
