/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import * as firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import "./ace.scss";
import "./index.scss";
import PageSection from "./page-sections/PageSection";
import AuthSection from "./auth-section/AuthSection";
import HomePage from "./HomePage";
import UserSettingsPage from "./user-settings/UserSettingsPage";

const firebaseConfig = {
  apiKey: "AIzaSyAHa__H-94TcQ0pJ6A2D2Q_B8zNuIos4xg",
  authDomain: "https://developercommunity.org",
  databaseURL: "https://developercommunity-f64fa.firebaseio.com",
  projectId: "developercommunity-f64fa",
  storageBucket: "developercommunity-f64fa.appspot.com",
  messagingSenderId: "441889180619",
  appId: "1:441889180619:web:446a204a828a247685444e",
  measurementId: "G-MXNJH44MCD",
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/user/:uid/settings">
          <UserSettingsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
