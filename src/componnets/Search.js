import React, { useState } from "react";

class Search extends React.Component {
  // const[term, setTerm] = useState("");
  state = { term: "" }
  onSubmitSearch = (event) => {
    this.setState({ term: event.target.value })
    console.log("1", this.state.term)
  }
  render() {
    return (
      <div className="container" >
        <form>
          <label className="form-label fw-bold">Enter Search Term</label>
          <input
            value={this.state.term}
            onChange={
              this.onSubmitSearch}
            className="form-control me-2" type="search" placeholder="Search" />
        </form>
      </div>
    )
  }

}
export default Search