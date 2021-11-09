import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash"


class App extends React.Component {
  state= {images: []};

  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: {query: term}
    });
    this.setState({images: response.data.results})
    console.log(this.state.images);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmitSearchBar={this.onSearchSubmit.bind(this)} />

        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
