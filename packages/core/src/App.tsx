/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import "./index.scss";

function App() {
  return (
    <main
      css={css`
        max-width: 1000px;
      `}
    >
      <h1>Welcome to the International Developer Community!</h1>
      <section>
        <h2>About</h2>
        <div>
          <p>
            The International Developer Community is a non-profit organization
            dedicated to helping and supporting software developers around the
            world.
          </p>
        </div>
      </section>
      <section>
        <p>
          The community was set up in 2020 as a organization to support and
          connect developers.
        </p>
      </section>
      <section>
        <h2>Organizations</h2>
        <div>
          <p>
            <a href="https://nz.developercommunity.org">
              New Zealand Developer Community
            </a>
          </p>
        </div>
      </section>
      <section>
        <h2>Joining</h2>
        <div>
          <p>
            The International Developer Community is open to anyone with an
            interest in development. In order to contribute to the community, it
            is recommended that you have a GitHub account. This will allow you
            to make edits to the community.
          </p>
          <p>
            All community members must abide by the
            <a href="#constitution">constitution</a> of the community.
          </p>
        </div>
      </section>
      <section>
        <h2 id="constitution">Constitution and Values</h2>
        <div>
          <h3>Core Values</h3>
          <ul>
            <li>
              <h4>Inclusivity</h4>
              <p>
                The community and its members support all people, regardless of
                race, religion, sexual orientation, sexuality, geographic
                location, or beliefs.
              </p>
            </li>
            <li>
              <h4>Integrity and Good Faith</h4>
              <p>
                The community and its members are honest, trustworthy, and
                attempt in all endeavors to act in good faith with other people.
              </p>
            </li>
            <li>
              <h4>Openness</h4>
              <p>
                The community members agree that sharing knowledge and software
                openly is the goal of the community.
              </p>
              <p>
                The community accepts that not all work can and should be public
                and open source. However, the communities holds that sharing
                knowledge and software openly is inherently beneficial to both
                themselves, the community, and the world.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
