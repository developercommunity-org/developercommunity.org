/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for PageSection props
 */
export interface PageSectionProps {
  children?: any;
  title: string;
  id?: string;
}

/**
 *  A PageSection component.
 */
const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <section>
      <h2 id={props.id}>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
};

export default PageSection;
