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
    return (
      <div className="SortPosts">
        <select value={this.props.sortOption} onChange={this.handleChange}>
          <option value="byDate">Most recent</option>
          <option value="byScore">Highest score</option>
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
