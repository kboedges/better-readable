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
    console.log("select", selectedCategory);

    return (
      <div className="SelectCategory">
        <select onChange={this.handleChange}>
          <option selected={selectedCategory === ""} value="">
            Select Category
          </option>
          {categories.map(category => (
            <option
              selected={selectedCategory === category.name}
              value={category.name}
              key={category.name}
            >
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
