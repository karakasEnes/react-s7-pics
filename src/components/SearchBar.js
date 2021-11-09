import React from "react";

class SearchBar extends React.Component {
  state = { term: "cars" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitSearchBar(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
                console.log("value: ", e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
