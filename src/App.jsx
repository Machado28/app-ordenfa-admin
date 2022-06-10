import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ConfigRoutes from "./views/pages/config/routes";
import "./scss/style.scss";
import  GlobalStyle from './styles'
import { AuthProvider } from "./contexts/auth";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const ResetPassword=  React.lazy(() =>import("./views/pages/recovery/ResetPassword"))
const Recovery =React.lazy(() => import("./views/pages/recovery/Recovery"));

const Register = React.lazy(() => import("./views/pages/register/Register"));
const Login = React.lazy(() => import("./views/pages/login/Login"));

const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <AuthProvider>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/config" component={ConfigRoutes} />
            <Route path="/recovery" component={Recovery} />
            <Route path="/resetPassword" component={ResetPassword} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/404" component={Page404} />
            <Route exact path="/500" component={Page500} />
            <Route path="/" component={TheLayout} />
          </Switch>
        </React.Suspense>
      </HashRouter>
      </AuthProvider>
    );
  }
}

export default App;
