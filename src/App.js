import React, { useState, useEffect } from "react";
import firebase from "./utils/firebase";
import "./styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";
import { ThemeProvider } from "@material-ui/core";
import { lightheme, darkTheme } from "./utils/Theme";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const initialState = {
  isAuth: false,
  isLoading: true,
  theme: "light"
};

export default function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((signedInUser) => {
      if (signedInUser) {
        const db = firebase.firestore();

        db.collection("users")
          .doc(signedInUser.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setState({
                isAuth: true,
                isLoading: false,
                theme: doc.data().theme
              });
            } else {
              setState({ isAuth: true, isLoading: false, theme: "light" });
            }
          });
      } else {
        setState({ isAuth: false, isLoading: false, theme: "light" });
      }
    });
  }, []);

  if (state.isLoading) {
    return (
      <ThemeProvider theme={state.theme === "light" ? lightheme : darkTheme}>
        <LoadingScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={state.theme === "light" ? lightheme : darkTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>

          <PublicRoute
            isAuth={state.isAuth}
            restricted={true}
            path="/Login"
            component={Login}
          />
          <PublicRoute
            isAuth={state.isAuth}
            restricted={true}
            path="/register"
            component={Register}
          />
          <PrivateRoute isAuth={state.isAuth} path="/Home" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
