import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.props.history.push(`/${e.target.value}`);
  };

  render() {
    const { categories } = this.props;
    // console.log(this.props)

    return (
      <div className="SelectCategory">
        <select value={this.state.value} onChange={this.handleChange}>
          <option defaultValue value="showAllPosts">
            Select Category
          </option>
          {categories.map(category => (
            <option value={category.name} key={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = ({ categories, selectedCategory }) => ({
  categories
});

export default connect(mapStateToProps)(withRouter(SelectCategory));
