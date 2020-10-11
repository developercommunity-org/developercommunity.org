/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import firebase from "firebase";
import React from "react";
import { useParams } from "react-router-dom";

/**
 * Interface for UserSettingsPage props
 */
export interface UserSettingsPageProps {
  children?: any;
}

/**
 *  A UserSettingsPage component.
 */
const UserSettingsPage: React.FC<UserSettingsPageProps> = (props) => {
  // let { uid } = useParams();
  const [signedIn, setSignedIn] = React.useState<boolean>(false);

  firebase.auth().onAuthStateChanged(() => {
    if (!firebase.auth().currentUser) {
      setSignedIn(false);
    } else {
      setSignedIn(true);
    }
  });

  return (
    <main>
      <h1 className="h1" css={css``}>
        Settings
      </h1>
      <p>Name: {firebase.auth().currentUser?.displayName}</p>
      <p>Email: {firebase.auth().currentUser?.email}</p>
      <p>
        Email Verified: {firebase.auth().currentUser?.emailVerified ? "true" : "false"}
      </p>
      <p>Receive Newsletter: false</p>
    </main>
  );
};

export default UserSettingsPage;
