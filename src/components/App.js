import React, { Component } from "react";
import Pics from "./pics/pics";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <Pics />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
