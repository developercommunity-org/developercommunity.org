/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

// FirebaseUI config.
const uiConfig = {
  // signInSuccessUrl: "<url-to-redirect-to-on-success>",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  // tosUrl: "<your-tos-url>",
  // Privacy policy url/callback.
  // privacyPolicyUrl: function () {
  //   window.location.assign("<your-privacy-policy-url>");
  // },
};

/**
 * Interface for AuthSection props
 */
export interface AuthSectionProps {
  children?: any;
}

/**
 *  A AuthSection component.
 */
const AuthSection: React.FC<AuthSectionProps> = (props) => {
  const [signedIn, setSignedIn] = React.useState<boolean>(false);
  React.useEffect(() => {
    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.

    firebase.auth().onAuthStateChanged(() => {
      if (!firebase.auth().currentUser) {
        setSignedIn(false);
        ui.start("#firebaseui-auth-container", uiConfig);
      } else {
        ui.delete();
        setSignedIn(true);
      }
    });
  }, []);

  // Hide firebaseui container if signed in

  return signedIn ? (
    <div>
      <p
        css={css`
          text-align: center;
        `}
      >
        {firebase.auth().currentUser?.displayName}
      </p>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;

          & > * {
            margin: 0 10px;
          }
        `}
      >
        <button
          className="btn btn-primary"
          type="button"
          onClick={async () => {
            window.location.href = `/user/${
              firebase.auth().currentUser?.uid
            }/settings`;
          }}
        >
          Settings
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={async () => {
            await firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  ) : (
    <div id="firebaseui-auth-container"></div>
  );
};

export default AuthSection;
