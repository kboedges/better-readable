import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// Actions
import { setCategorySort } from "../reducers/set-category-sort/actions";

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
        this.props.setCategorySort(myVal);
        this.props.history.push(`/${myVal}`);
      }
    );
  };

  render() {
    const { categories, selectedCategory } = this.props;

    return (
      <div className="SelectCategory">
        <select value={selectedCategory} onChange={this.handleChange}>
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
  categories,
  selectedCategory
});

const mapDispatchToProps = dispatch => ({
  setCategorySort: selectedCategory =>
    dispatch(setCategorySort(selectedCategory))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SelectCategory));
