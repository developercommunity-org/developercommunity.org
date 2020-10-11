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

  

  return (
    <div css={css``}>
      UserSettingsPage component {firebase.auth().currentUser?.displayName}
    </div>
  );
};

export default UserSettingsPage;
