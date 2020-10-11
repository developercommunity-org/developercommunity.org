import React from "react";
import "./index.scss";

function App() {
  return (
    <main>
      <h1>Welcome to the International Developer Community!</h1>
      <section>
        <h2></h2>
      </section>
      <section>
        <h2>About</h2>
        <div>
          <p>
            The International Developer Community is an organisation dedicated
            to helping and supporting software developers around the world.
          </p>
        </div>
      </section>
      <section>
        <h2>Origin</h2>
        <p>
          The International Developer Community was set up in 2020 as a
          non-profit organisation to support developers of all creeds and
          technologies.
        </p>
        <p>The community is headquartered in Dunedin, New Zealand.</p>
      </section>
      <section>
        <h2>Organisations</h2>
        <div>
          <a href="nz.developercommunity.org">
            New Zealand Developer Community
          </a>
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
    </main>
  );
}

export default App;
