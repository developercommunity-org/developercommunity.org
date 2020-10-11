  /** @jsx jsx */
  import { css, jsx } from "@emotion/core"
  import React from "react"

  /**
   * Interface for UserSettingsPage props
   */
  export interface UserSettingsPageProps {
    children?: any;
  };

  /**
   *  A UserSettingsPage component.
   */
  const UserSettingsPage: React.FC<UserSettingsPageProps> = (props) => {
    return <div css={css``}>UserSettingsPage component</div>
  }

  export default UserSettingsPage
