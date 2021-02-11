import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loadUser } from "./actions/auth";
import { Helmet } from "react-helmet";

//Routes Import
import routes from "./components/routes";
import { Fragment } from "react";

function App() {
  let uid = localStorage.getItem("userid");
  useEffect(() => {
    if (uid != null) {
      store.dispatch(loadUser(uid));
    }
  }, [uid]);

  return (
    <Fragment>
      <Helmet>
                <title>Pasal</title>     
      </Helmet>
      <Provider store={store}>
        <Router>
          <Route component={routes} />
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
