import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { setSort } from "../reducers/sort-posts/actions";

class SortPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.setSort };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
    this.props.setSort(e.target.value);
  };

  render() {
    console.log(this.props.sortOption);
    return (
      <div className="SortPosts">
        <select onChange={this.handleChange}>
          <option selected={this.props.sortOption == "byDate"} value="byDate">
            Most recent
          </option>
          <option selected={this.props.sortOption == "byScore"} value="byScore">
            Highest score
          </option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = ({ sortOption }) => ({
  sortOption
});

const mapDispatchToProps = dispatch => ({
  setSort: option => dispatch(setSort(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortPosts);
