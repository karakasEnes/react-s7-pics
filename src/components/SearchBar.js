import React from "react";

class SearchBar extends React.Component {
  state = { term: "bestTest" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
                console.log("value: ", e.target.value);
                // console.log("state: ", this.state.term);
                // console.log();
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
