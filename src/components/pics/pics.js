import React, { Component } from "react";
import PicSingle from "./PicSingle";
import PicNotFound from "./PicNotFound";

class Pics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      pics: [],
      loading: false,
      message: "",
    };
  }
  keyUpText = (event) => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchRes(query);
    });
    console.log(query);
    event.preventDefault();
  };
  fetchRes = (query) => {
    let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=whPLL1RmFWkLGkqXQQ0_r7HWtjXCpWaGCQge6T3xVPs`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          pics: data.results,
        });
      })
      .then((resualt) => console.log(resualt))
      .catch((err) => console.log(err));
  };

  renderItems() {
    if (this.state.pics.length > 0) {
      return this.state.pics.map((item) => (
        <PicSingle key={item.id} item={item} />
      ));
    } else {
      return <PicNotFound />;
    }
  }
  render() {
    const { query } = this.state;
    console.warn();

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div id="navbarSupportedContent">
            <input
              type="text"
              value={query}
              name="query"
              aria-label="search"
              className="form-control mr-sm-2"
              onChange={this.keyUpText}
            />

          </div>
        </nav>
        <div className="card-columns mt-5 loader-height">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default Pics;
