import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Routes Import
import routes from "./components/routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route component={routes} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
