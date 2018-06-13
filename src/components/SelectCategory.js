import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class SelectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = e => {
    const myVal = e.target.value;
    this.setState(
      {
        value: e.target.value
      },
      () => {
        this.props.history.push(`/${myVal}`);
      }
    );
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="SelectCategory">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="">Select Category</option>
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
