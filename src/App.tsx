import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ConfigRoutes from "./views/pages/config/routes";
import "./scss/style.scss";
import  GlobalStyle from './../styles'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const FormInscricaoOnline = React.lazy(
  () => import("./views/form_inscricao_online/index")
);
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Home = React.lazy(() => import("./views/home/index"));

const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/config" component={ConfigRoutes} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/404" component={Page404} />
            <Route exact path="/500" component={Page500} />
            <Route exact path="/home" component={Home} />
            <Route
              exact
              path="/inscricaoOnline"
              component={FormInscricaoOnline}
            />
            <Route path="/" component={TheLayout} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
